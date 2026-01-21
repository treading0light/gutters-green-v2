<script setup>
const steps = [
  {
    number: '01',
    title: 'Free Estimate',
    description: 'We assess your needs on-site, measure your home, and provide a detailed quote with no obligation. We\'ll answer all your questions and explain our recommendations.'
  },
  {
    number: '02',
    title: 'Custom Fabrication',
    description: 'Gutters are made to fit your home perfectly. We bring our gutter machine to your property and custom-fabricate seamless gutters on location to your exact specifications.'
  },
  {
    number: '03',
    title: 'Professional Installation',
    description: 'Efficient, clean, same-day or scheduled installation. Our safety-certified team works quickly without compromising quality, and we clean up thoroughly when finished.'
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'We ensure your complete satisfaction. We\'ll walk you through the completed work, test the system, and make sure you\'re happy with every detail before we leave.'
  }
]
</script>

<template>
  <div class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base/7 font-semibold text-primary">How It Works</h2>
        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Simple, Straightforward Process
        </p>
        <p class="mt-6 text-lg/8 text-gray-600">
          From your first call to project completion, we make the gutter installation process easy and stress-free.
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          <ScrollReveal v-for="step in steps" :key="step.number" class="flex flex-col">
            <div class="relative">
              <div class="flex items-center justify-center">
                <span class="flex size-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  {{ step.number }}
                </span>
              </div>

              <div class="mt-6">
                <h3 class="text-xl font-semibold text-gray-900">{{ step.title }}</h3>
                <p class="mt-4 text-base text-gray-600">{{ step.description }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div class="mt-16 flex justify-center">
        <a href="#contact" class="btn btn-primary btn-lg">Get Your Free Estimate Today</a>
      </div>
    </div>
  </div>
</template>
