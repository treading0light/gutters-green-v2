<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const reasons = [
  {
    title: 'Hand-Cut Miters',
    description: 'Precision craftsmanship, not mass-produced corners. Our hand-cut miters create seamless, tight-fitting corners that look professional and last longer.',
    icon: CheckCircleIcon
  },
  {
    title: 'On-Site Custom Fabrication',
    description: 'Gutters made to your home\'s exact measurements. We bring the gutter machine to you and custom-fabricate seamless gutters on location for a perfect fit.',
    icon: CheckCircleIcon
  },
  {
    title: 'Safety-Certified Technicians',
    description: 'Fall protection trained professionals with over 10 years of experience. Your safety and ours is our top priority on every job.',
    icon: CheckCircleIcon
  },
  {
    title: 'Local PNW Expertise',
    description: 'We understand Seattle-Tacoma weather challenges. From heavy rainfall to moss growth, we know what gutter solutions work best in our climate.',
    icon: CheckCircleIcon
  },
  {
    title: 'Gutter Guard Options',
    description: 'Professional gutter guard installation available. We\'ll discuss which products work best for your home and how they affect long-term maintenance.',
    icon: CheckCircleIcon
  },
  {
    title: 'Quality Guarantee',
    description: 'We stand behind our work with comprehensive warranties. Your satisfaction and the longevity of your gutter system are our commitment to you.',
    icon: CheckCircleIcon
  }
]
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base/7 font-semibold text-primary">Why Choose Us</h2>
        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Experience the Gutters Green Difference
        </p>
        <p class="mt-6 text-lg/8 text-gray-600">
          Over a decade of expertise in gutter installation, cleaning, and repair throughout the Seattle-Tacoma area.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <ScrollReveal v-for="reason in reasons" :key="reason.title">
            <div class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                <component :is="reason.icon" class="size-5 flex-none text-primary" aria-hidden="true" />
                {{ reason.title }}
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                <p class="flex-auto">{{ reason.description }}</p>
              </dd>
            </div>
          </ScrollReveal>
        </dl>
      </div>
    </div>
  </div>
</template>
