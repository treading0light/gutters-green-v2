<script setup lang="ts">

const route = useRoute()
const { getArea } = useServiceAreas('gutter-installation')

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
      navigateTo('/gutter-installation', { replace: true })
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

const carasolImages = ref([
  {src: "", alt: ""},
  {src: "", alt: ""},
  {src: "", alt: ""},

])

const images = ref([
  {src: "/images/gallery-3/20210823_173852_HDR.webp", alt: "New white gutters on a blue house"},
  {src: "/images/gallery-3/IMG20250606170650.webp", alt: ""},
  {src: "/images/gallery-3/brick-black.webp", alt: "New black gutters on a brick house"},
  {src: "/images/gallery-3/both-corners.webp", alt: "Two example gutter corners"},
])

const contactMessage = ref('')

const chooseCorner = (corner: 'strip-miter' | 'hand-cut') => {
  const el = document.getElementById('contact')
  if (!el) return // safety in case element doesn't exist

  const options: Record<'strip-miter' | 'hand-cut', string> = {
    'strip-miter': 'I would like "Strip-miter" style corners.',
    'hand-cut': 'I would like "Hand-cut" style corners.',
  }

  contactMessage.value = options[corner] ?? 'Unknown Corner Type'
  el.scrollIntoView({ behavior: 'smooth' })
}

const url = areaSlug ? `https://www.theguttersgreen.com/gutter-installation/${areaSlug}` : 'https://www.theguttersgreen.com/gutter-installation'

useHead(
  {
  title: 'Seamless Gutter Installation Service | The Gutters Green',
  meta: [
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Professional Gutter Installation In Seattle And Tacoma' },
      { property: 'og:description', content: 'Protect your home with expert gutter installation services by The Gutters Green' },
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
      "areaServed": "King County, Pierce County",
      "description": "Protect your home with expert roof cleaning and moss removal services by The Gutters Green",
      "image": "https://www.theguttersgreen.com/logo.png",
      "service": {
        "@type": "Service",
        "name": "Gutter Installation",
        "areaServed": [
          { "@type": "Place", "name": "King County" },
          { "@type": "Place", "name": "Pierce County" }
        ],
        "description": "We provide expert gutter installation services, made on site to fit your home."
      }
    })
  }
  ]
}
)

defineOgImageComponent('GutterOg', {
  title: "Seamless Gutter Installation & Replacement",
  description: "Protect your foundation and enhance curb appeal with professionally installed 5K gutters in the Seattle–Tacoma area.",
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
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn about new gutters <span aria-hidden="true">→</span></a>
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
        <!-- <img src="/images/gallery-3/20210823_173852_HDR.webp" alt="New white gutters on a blue house"
          class="absolute bottom-0 aspect-[3/2] object-cover lg:aspect-auto lg:size-full transition-opacity duration-1000"> -->
        </div>
    </section>
    <section class="my-20">
      <h2 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Choose Your Corner Style!</h2>
      <div class="flex w-full flex-col md:flex-row justify-around items-center md:items-start mt-10">
      
        <div class="card rounded-none bg-white w-96 md:w-1/3 text-gray-900">
        <ScrollReveal> 
          <figure>
            <img
              class="rounded-xl"
              src="/images/gallery-3/hand-cut-corner.webp"
              alt="A hand cut miter corner on a gutter" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Hand-Cut Miter (Craftsman Corner)</h2>
            <p>A hand-cut miter is custom-cut and joined on-site to create a seamless, precise corner. 
              This option offers a clean, professional look that’s often preferred for its craftsmanship and tighter fit.
              It’s a great choice if you want the most polished appearance possible with fewer seams and a higher-end finish.</p>
            <div class="card-actions justify-end">
              <button @click="chooseCorner('hand-cut')" class="btn btn-primary">Choose This Corner</button>
            </div>
          </div>
        </ScrollReveal>
        </div>

        <div class="divider divider-primary text-primary md:divider-horizontal">OR</div>

        <div class="card rounded-none bg-white w-96 md:w-1/3 text-gray-900">
        <ScrollReveal>
          <figure>
            <img
              class="rounded-xl"
              src="/images/gallery-3/strip-miter-corner.webp"
              alt="a gutter with a strip miter corner" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Strip Miter (Standard Corner)</h2>
            <p>A strip miter uses a prefabricated corner piece to join the gutter sections. It creates a more uniform, 
            consistent look across all corners and can help reduce installation time. While slightly more visible at the joint,
            it's a reliable and cost-effective option.</p>
            <div class="card-actions justify-end">
              <button @click="chooseCorner('strip-miter')" class="btn btn-primary">Choose This Corner</button>
            </div>
          </div>
        </ScrollReveal>
        </div>    
      </div>
    </section>

    <ScrollReveal>
      <LazyServiceAreaSection serviceSlug="gutter-installation"/>
    </ScrollReveal>


    <!-- <section class="hero bg-white min-h-screen text-gray-900">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          class="max-w-sm rounded-lg shadow-2xl"
        />

        <div class="carousel rounded-box w-96">
          <div v-for="img, index in carasolImages" :key="index" class="carousel-item w-1/2">
            <img
              :src="img.src" :alt="img.alt"
              class="w-full" />
          </div>


        </div>

        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section> -->

    <LazyContact id="contact" :message="contactMessage" />
      
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