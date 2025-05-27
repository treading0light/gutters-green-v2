<template>
    <main>
    <LazyPhoneModal />

    <section class="relative">
      <div class="mx-auto max-w-7xl">
        <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Professional Roof Cleaning In Federal Way, WA.</h1>
              <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Roof moss removal, roof blow, gutter cleaning and repairs</p>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="#" class="btn btn-primary">Free Quote!</a>
                <a href="#method" class="text-sm/6 font-semibold text-gray-900">Learn about our cleaning method <span aria-hidden="true">→</span></a>
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
            :src="image"
            class="absolute bottom-0 aspect-[3/2] object-cover lg:aspect-auto lg:size-full transition-opacity duration-1000"
            :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
            :alt="index % 2 == 0 ? 'A mossy roof in need of cleaning' : 'A roof recently cleaned by a professional.'"
        />
        </div>
    </section>
    <LazyMethodStory />

    <LazyContact />

        
    </main>
</template>

<script setup>
const backgrounds = [
    '/images/before-wide.webp',
    '/images/after-wide.JPG'
]

const images = [
    '/images/before.webp',
    '/images/after.JPG',
    '/images/before-after/webp/rcb1.webp',
    '/images/before-after/webp/rca1.webp',
    '/images/before-after/webp/rcb2.webp',
    '/images/before-after/webp/rca2.webp',
    '/images/before-after/webp/rcb3.webp',
    '/images/before-after/webp/rca3.webp',
]



const currentIndex = ref(0)
let interval

onMounted(() => {
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length
    }, 3000)
})

onUnmounted(() => {
    clearInterval(interval)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>