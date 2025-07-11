<script setup>
const images = [
  {
    url: '/images/about/ds-through-deck.webp',
    alt: 'A white downspout passing through a custom cut hole in a wooden deck.'
  },
  {
    url: '/images/about/hand-miter.webp',
    alt: 'A professionally hand cut miter outside corner, white 5k gutter.'
  },
  {
    url: '/images/about/clean-install.webp',
    alt: 'A white 5k gutter and downspout on a blue house with shake siding.'
  },
  {
    url: '/images/about/inside-corner.webp',
    alt: 'Black 5k gutter, custom inside corner.'
  },
  {
    url: '/images/about/staged-black-gutters.webp',
    alt: '5k black gutters staged for installation.'
  }
]

</script>

<template>
  <section>
    <div class="relative isolate">
      <svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
      </svg>
      <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
        <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#166534] to-[#34d399] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
      </div>
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Quality Gutters by Skilled Technicians</h1>
              <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                With over 10 years of experience in <strong>gutter installation</strong>, <strong>gutter repair</strong>, 
                and <strong>gutter cleaning</strong>, we provide reliable service homeowners can count on. 
                Whether you're upgrading to <strong>seamless gutters</strong>, fixing a leak, or scheduling routine maintenance, 
                we make sure every detail is handled with care. Our team takes the time to walk you through your options,
                 answer your questions, and ensure your home is protected from <strong>water damage</strong> year-round.</p>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="#contact" class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Contact Us Now</a>
                <NuxtLink to="/about" class="text-sm/6 font-semibold text-gray-900">Learn more about us <span aria-hidden="true">→</span></NuxtLink>
              </div>
            </div>

            <div class="mt-14 flex justify-center mr-32 sm:mr-0 sm:gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">

              <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div class="relative w-3/4 sm:w-full">
                  <img :src="images[0].url" :alt="images[0].alt" class="hidden sm:block aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" loading="lazy" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>

              <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div class="relative w-3/4 sm:w-full">
                  <img :src="images[1].url" :alt="images[1].alt" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" loading="lazy" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative w-3/4 sm:w-full">
                  <img :src="images[2].url" :alt="images[2].alt" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" loading="lazy"  />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>

              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative w-3/4 sm:w-full">
                  <img :src="images[3].url" :alt="images[3].alt" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" loading="lazy" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="relative w-3/4 sm:w-full">
                  <img :src="images[4].url" :alt="images[4].alt"
                   class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" loading="lazy" />
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>