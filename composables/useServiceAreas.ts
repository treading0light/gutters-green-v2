// composables/useServiceAreas.ts
import { gutterInstallationAreas } from '~/data/gutter-installation-areas'
import { gutterCleaningAreas } from '~/data/gutter-cleaning-areas'
import { roofCleaningAreas } from '~/data/roof-cleaning-areas'

export type ServiceSlug = 'gutter-installation' | 'gutter-cleaning' | 'roof-cleaning'

interface CityInfo {
  slug: string
  name: string
  heroTitle?: string
  heroText?: string
}

interface CountyInfo {
  slug: string
  name: string
  heroTitle?: string
  heroText?: string
  cities: CityInfo[]
}

interface AreaInfo {
  slug: string
  name: string
  heroTitle?: string
  heroText?: string
}

interface ServiceAreas {
  counties: CountyInfo[]
}

function getServiceAreas(service: ServiceSlug): ServiceAreas {
  switch (service) {
    case 'gutter-installation':
      return gutterInstallationAreas
    case 'gutter-cleaning':
      return gutterCleaningAreas
    case 'roof-cleaning':
      return roofCleaningAreas
    default:
      throw new Error(`Unknown service slug: ${service}`)
  }
}

export function useServiceAreas(service: ServiceSlug) {
  const areas = getServiceAreas(service)

  // All counties
  function getCounties(): CountyInfo[] {
    return areas.counties
  }

  // All cities (flattened)
  function getCities(): CityInfo[] {
    return areas.counties.flatMap(c => c.cities)
  }

  // Get county by slug
  function getCounty(slug: string): CountyInfo | undefined {
    return areas.counties.find(c => c.slug === slug)
  }

  // Get city by slug (searches across counties)
  function getArea(slug: string): AreaInfo | undefined {
    for (const county of areas.counties) {
      if (county.slug === slug) return county
      const city = county.cities.find(c => c.slug === slug)
      if (city) return city
    }
    return undefined
  }

  // Lightweight list of just { slug, name }
  function listCountySlugs(): { slug: string; name: string }[] {
    return areas.counties.map(c => ({ slug: c.slug, name: c.name }))
  }

  function listCitySlugs(): { slug: string; name: string }[] {
    return getCities().map(c => ({ slug: c.slug, name: c.name }))
  }

  return {
    getCounties,
    getCities,
    getCounty,
    getArea,
    listCountySlugs,
    listCitySlugs,
  }
}
