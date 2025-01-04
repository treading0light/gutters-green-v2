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
              <img :src="hoveredIndex === index ? feature.after : feature.before"
              @mouseover="handleHover(index)"
              @mouseleave="handleLeave" 
              class="rounded-xl" 
              />
              <h2 class="mt-6 text-2xl font-semibold text-gray-900">{{ feature.name }}</h2>
              <!-- <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                <component class="size-5 flex-none text-secondary" aria-hidden="true" />
                {{ feature.name }}
              </dt> -->
              <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                <p class="flex-auto">{{ feature.description }}</p>
                <p class="mt-6">
                  <a :href="feature.href" class="text-sm/6 font-semibold text-secondary">Learn more <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  import image1 from '/images/before.jpg'
  import image2 from '/images/after.jpg'
  
  const hoveredIndex = ref(null);

  const features = [
    {
      name: 'New Gutters Installed',
      description:
        'Full gutter system design and installation. We custom make 5K and 6K profile gutters to perfectly fit your home and your needs. ',
      href: '#',
      before: image1,
      after: image2,
    },
    {
      name: 'Gutter Repairs',
      description:
        'Gutter slope correcting, corner reasealing, gutter and downspout re-fastening, and more available with gutter cleaning service',
      href: '#',
      before: image1,
      after: image2,
    },
    {
      name: 'Gutter and Roof Cleaning',
      description:
        'Roof air blow cleaning, moss removal, gutter cleaning, downspout clog removal',
      href: '#',
      before: image1,
      after: image2,
    },
  ]

  const handleHover = (index) => {
    hoveredIndex.value = index
  }

  const handleLeave = () => {
    hoveredIndex.value = null
  }

  </script>