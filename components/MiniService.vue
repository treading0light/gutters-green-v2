<script setup>
  const router = useRouter()

  const features = [
    {
      name: 'Seamless Gutter Installation',
      description:
        'Full gutter system design and installation. We custom make 5K profile gutters to perfectly fit your home and your needs. ',
      image: '/images/gutter-machine.webp',
      alt: 'A white 5k gutter coming out of the gutter machine with a cup of tea and a jet boiler above it.',
      linkText:'Learn more about gutter installation',
      href: '/gutter-installation'
    },
    {
      name: 'Gutter Repairs',
      description:
        'Gutter slope correcting, corner reasealing, gutter and downspout re-fastening, and more available with gutter cleaning service',
      image: '/images/new-gutters.webp',
      alt: 'A blue house with new white 5k gutters.',
      linkText:'',
      href: '#'
    },
    {
      name: 'Gutter and Roof Cleaning',
      description:
        'Roof air blow cleaning, moss removal, gutter cleaning, downspout clog removal',
      image: '/images/before.webp',
      alt: 'A roof that has been recently cleaned of moss.',
      linkText:'Learn more about roof cleaning',
      href: '/roof-cleaning'
    },
  ]

  const updateQueryWithHash = async (serviceName) => {
    const slug = serviceName.toLowerCase().replace(/\s/g, '-')
    await router.push({
      hash: '#contact',
      query: {
        ...router.currentRoute.value.query,
      services: [slug],
      },
    })
  }

</script>

<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base/7 font-semibold text-indigo-600"></h2>
          <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Our Services</p>
          <p class="mt-6 text-2xl/8 text-gray-600">
            Learn more about our services and how we can help you with your home improvement needs.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div v-for="(feature, index) in features" :key="feature.name" class="flex flex-col">
                <ScrollReveal>

                <div class="aspect-w-16 aspect-h-9">
                  <NuxtLink :to="feature.href"><img :src="feature.image" :alt="feature.description" class="rounded-xl object-cover" /> </NuxtLink>
                </div>

                <h2 class="mt-6 text-2xl font-semibold text-gray-900">{{ feature.name }}</h2>
                <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p class="flex-auto">{{ feature.description }}</p>
                  <div class="flex justify-between mt-6">
                    <p class="">
                      <a :href="feature.href" class="text-sm/6 font-semibold text-secondary">{{ feature.linkText }} <span aria-hidden="true">→</span></a>
                    </p>
                    <button class="btn btn-primary" @click="updateQueryWithHash(feature.name)">Book This Service</button>
                  </div>
                </dd>
                            </ScrollReveal>

              </div>

          </dl>
        </div>
      </div>
    </div>
  </template>
  
