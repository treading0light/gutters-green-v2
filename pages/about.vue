<script setup>
    useHead({
    title: 'About The Gutters Green',
    meta: [
        { property: 'og:url', content: 'https://www.theguttersgreen.com/about' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'About' },
        { property: 'og:description', content: 'Information about The Gutters Green, LLC.' },
    ]
    })

    defineOgImageComponent('GutterOg', {
        title: "The Gutters Green",
        description: "Read our story!",
        headline: "Seamless Gutter Installation",
        image: "/images/gutter-carry.jpeg"
    })
</script>

<template>
    <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>

    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base/7 font-semibold text-secondary">About Us</p>
            <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">The Company</h1>
            <p class="mt-6 text-xl/8 text-gray-700">The Gutters Green LLC specializes in the professional installation of seamless gutters, gutter repairs, modifications, gutter cleaning, and roof cleaning. With over a decade of hands-on experience, I’ve developed expertise in all aspects of gutter systems, ensuring high-quality service and customer satisfaction.</p>
            <h2 class="mt-6 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">My Story</h2>
            <p class="mt-8 text-xl/8 text-gray-700">My journey in the gutter industry began in 2012 when I worked for a leading gutter material supplier. This role allowed me to become well-versed in all aspects of gutter components, accessories, and terminology. More importantly, it introduced me to the skilled professionals who make up the backbone of this industry—the gutter installers.</p>
            <p class="mt-8 text-xl/8 text-gray-700">In 2015, I joined a prestigious gutter and roof cleaning company, where I received advanced fall protection training, a skill set that has been foundational throughout my career. It was during this time that I discovered my passion for delivering more than just a service—I enjoyed creating a memorable and positive experience for every customer.</p>
            <p class="mt-8 text-xl/8 text-gray-700">A few years later, I transitioned to the gutter division of a respected roofing company. My proficiency with ropes and ladders quickly set me apart, and I was entrusted with my own truck, gutter machine, and crew to manage. This position also reconnected me with many industry professionals as we regularly crossed paths while sourcing materials.</p>
            <p class="mt-8 text-xl/8 text-gray-700">In the years that followed, I ventured into building something of my own. I was fortunate to work with various construction and gutter companies, often through friends who valued my expertise. These collaborations gave me firsthand exposure to the approaches of both seasoned veterans and ambitious startups in the gutter industry.</p>

          </div>
        </div>
      </div>

      <!-- <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/images/myself.jpg" alt="The owner of a gutter company hikes through the PNW" />
      </div> -->

      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">

            <h2 class="mt-16 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">Today</h2>
            <p class="mt-6 text-xl/8 text-gray-700">Every step of my journey has been a learning experience. I’ve absorbed invaluable insights from the long-standing generation of gutter professionals and the innovative ideas of new entrants to the field. These experiences have shaped my expertise and refined the high standards I uphold today.</p>
            <p class="mt-6 text-xl/8 text-gray-700">At The Gutters Green LLC, I combine this wealth of knowledge with a commitment to providing reliable, professional, and customer-focused service.</p>
          </div>
        </div>
      </div>

      <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-[10%] md:w-[38rem] lg:w-[57rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10" src="/images/gutter-carry.jpeg" alt="A man carrying a 46 foot gutter up a ladder." />
      </div>
    </div>

    <CTA />

  </div>
</template>