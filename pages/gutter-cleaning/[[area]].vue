<script setup lang="ts">

const route = useRoute()
const { getArea } = useServiceAreas('gutter-cleaning')

// Ensure slug is a string
const areaSlug = Array.isArray(route.params.area)
  ? route.params.area[0]
  : route.params.area

// Pick city/county or fallback
const areaInfo = computed(() => {
  if (areaSlug) {
    const hit = getArea(areaSlug as string)
    if (hit) {
      return hit
    } else {
      // redirect if invalid slug
      navigateTo('/gutter-cleaning', { replace: true })
      return getArea('federal-way') // safe fallback while redirecting
    }
  } else {
    return getArea('federal-way')
  }
})

const currentIndex = ref(0)
let interval: ReturnType<typeof setInterval>

onMounted(() => {
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length
    }, 3000)
})

onUnmounted(() => {
    clearInterval(interval)
})

const images = ref([
  {src: "/images/gallery-3/20210823_173852_HDR.webp", alt: "Clean gutters on a house"},
  {src: "/images/gallery-3/IMG20250606170650.webp", alt: "Professional gutter cleaning"},
  {src: "/images/gallery-3/brick-black.webp", alt: "Well-maintained gutters"},
  {src: "/images/gallery-3/both-corners.webp", alt: "Gutter system detail"},
])

const url = areaSlug ? `https://www.theguttersgreen.com/gutter-cleaning/${areaSlug}` : 'https://www.theguttersgreen.com/gutter-cleaning'

// Dynamic title and description based on area
const pageTitle = computed(() => {
  const area = areaInfo.value
  if (!area) return 'Gutter Cleaning Service | The Gutters Green'
  return `Professional Gutter Cleaning in ${area.name}, WA | The Gutters Green`
})

const pageDescription = computed(() => {
  const area = areaInfo.value
  if (!area) return 'Protect your home with expert gutter cleaning services by The Gutters Green in the Seattle-Tacoma area.'
  // Strip HTML tags from heroText for meta description
  const plainText = area.heroText?.replace(/<[^>]*>/g, '') || ''
  // Truncate to ~160 characters for optimal SEO
  return plainText.length > 160 ? plainText.substring(0, 157) + '...' : plainText
})

const serviceAreaName = computed(() => {
  const area = areaInfo.value
  return area?.name || 'King County, Pierce County'
})

useHead(
  {
  title: pageTitle,
  meta: [
      { name: 'description', content: pageDescription },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
  ],
  script: [
  {
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "The Gutters Green",
      "url": url,
      "telephone": "+12532484670",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Federal Way",
        "addressRegion": "WA",
        "postalCode": "98023"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "areaServed": serviceAreaName.value,
      "description": pageDescription.value,
      "image": "https://www.theguttersgreen.com/logo.png",
      "service": {
        "@type": "Service",
        "name": "Gutter Cleaning",
        "areaServed": {
          "@type": "Place",
          "name": serviceAreaName.value
        },
        "description": `We provide professional gutter cleaning services in ${serviceAreaName.value}, including debris removal, downspout flushing, and moss treatment.`
      }
    })
  }
  ]
}
)

defineOgImageComponent('GutterOg', {
  title: "Professional Gutter Cleaning",
  description: "Keep your gutters flowing freely with expert cleaning services in the Seattle–Tacoma area.",
  headline: "The Gutters Green"
})
</script>

<template>
  <main class="bg-white">
    <LazyPhoneModal />

    <section class="relative">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl" v-html="areaInfo?.heroTitle"></h1>
              <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8" v-html="areaInfo?.heroText"></p>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="#contact" class="btn btn-primary">Free Quote!</a>
                <a href="#process" class="text-sm/6 font-semibold text-gray-900">Learn about our process <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

        <!-- Reserve space for image below content on small screens -->
        <div class="block lg:hidden h-[250px] sm:h-[400px] md:h-[500px]"></div>

        <div class="bg-gray-50 lg:absolute lg:inset-y-0 bottom-0 lg:right-0 lg:w-1/2 overflow-hidden">
        <img
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            class="absolute bottom-0 aspect-[3/2] object-cover lg:aspect-auto lg:size-full transition-opacity duration-1000"
            :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
            :alt="image.alt"
        />
        </div>
    </section>

    <section id="process" class="my-20 px-6">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl mb-12">Our Gutter Cleaning Process</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal>
            <div class="card rounded-none bg-white text-gray-900">
              <div class="card-body">
                <div class="flex items-center gap-4 mb-4">
                  <div class="badge badge-primary badge-lg">1</div>
                  <h3 class="card-title text-2xl">Debris Removal</h3>
                </div>
                <p class="text-lg">We hand-clear all leaves, sticks, moss, and accumulated debris from your gutters. This thorough approach ensures every section is completely cleared, preventing future clogs and overflow.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div class="card rounded-none bg-white text-gray-900">
              <div class="card-body">
                <div class="flex items-center gap-4 mb-4">
                  <div class="badge badge-primary badge-lg">2</div>
                  <h3 class="card-title text-2xl">Downspout Clog Removal</h3>
                </div>
                <p class="text-lg">We check all downspouts and clear every clog, disassembling elbows where necessary to ensure complete removal. No shortcuts—we make sure water flows freely away from your foundation.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div class="card rounded-none bg-white text-gray-900">
              <div class="card-body">
                <div class="flex items-center gap-4 mb-4">
                  <div class="badge badge-primary badge-lg">3</div>
                  <h3 class="card-title text-2xl">Expert Inspection & Repairs</h3>
                </div>
                <p class="text-lg">Unlike typical gutter cleaners, we actually install and repair gutters professionally. We inspect for damage, sagging, loose fasteners, and leaks—and can fix them on the spot if needed.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div class="card rounded-none bg-white text-gray-900">
              <div class="card-body">
                <div class="flex items-center gap-4 mb-4">
                  <div class="badge badge-primary badge-lg">4</div>
                  <h3 class="card-title text-2xl">Detailed Cleanup</h3>
                </div>
                <p class="text-lg">We remove all debris from your property and leave your grounds spotless. Every leaf, stick, and bit of moss is cleared away—your gutters are clean and your property looks pristine.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div class="mt-12 p-8 bg-primary/10 border-l-4 border-primary rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">The Installer Advantage</h3>
          <p class="text-lg text-gray-700 mb-4">
            Most gutter cleaning companies just remove debris. We're different because we're <strong>professional gutter installers</strong> who also clean gutters.
          </p>
          <p class="text-lg text-gray-700">
            This means we spot problems other cleaners miss—improper slope, failing fasteners, undersized downspouts—and we can actually fix them.
            You get expert diagnosis and solutions all in one visit, not just a basic cleaning.
          </p>
        </div>

        <div class="mt-8 p-8 bg-green-50 rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Recommended Cleaning Schedule</h3>
          <p class="text-lg text-gray-700 mb-4">In the Pacific Northwest, we recommend cleaning your gutters at least <strong>twice a year</strong>:</p>
          <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li><strong>Spring:</strong> Remove winter debris and prepare for spring rains</li>
            <li><strong>Fall:</strong> Clear autumn leaves before winter storms arrive</li>
          </ul>
          <p class="text-lg text-gray-700 mt-4">Homes with overhanging trees or heavy foliage may benefit from more frequent cleanings.</p>
        </div>
      </div>
    </section>

    <ScrollReveal>
      <LazyServiceAreaSection serviceSlug="gutter-cleaning"/>
    </ScrollReveal>

    <LazyContact id="contact" />

  </main>
</template>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-in-out;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>
