<!-- components/ServiceAreaGrid.vue -->
<script setup lang="ts">
import { useServiceAreas } from '~/composables/useServiceAreas'

type ServiceSlug = 'gutter-installation' | 'gutter-cleaning' | 'roof-cleaning'
const props = withDefaults(defineProps<{ serviceSlug?: ServiceSlug }>(), {
  serviceSlug: 'gutter-installation',
})

const { getCounties } = useServiceAreas(props.serviceSlug)
const counties = getCounties()
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-8 md:py-12">
    <header class="mb-8 text-center">
      <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Service Areas</h2>
      <p class="mt-1 text-xl text-gray-600 md:text-lg">
        Explore our {{ props.serviceSlug.replace('-', ' ') }} services by city:
      </p>
    </header>

    <div class="flex flex-row justify-between sm:justify-around">
      <div v-for="county in counties" :key="county.slug" class="">
        <!-- County -->
        <NuxtLink
          :to="`/${props.serviceSlug}/${county.slug}`"
          class="block text-lg font-semibold text-gray-900 hover:text-green-700 md:text-xl mb-3"
        >
          {{ county.name }}
        </NuxtLink>
        <!-- Cities grid -->
        <ul class="grid grid-cols-2 sm:gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4 list-disc">
        <li v-for="city in county.cities" :key="city.slug">
            <NuxtLink
            :to="`/${props.serviceSlug}/${city.slug}`"
            class="text-sm text-gray-700 hover:text-green-700"
            >
            {{ city.name }}
            </NuxtLink>
        </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* small touch target improvements on mobile */
a { -webkit-tap-highlight-color: transparent; }
</style>
