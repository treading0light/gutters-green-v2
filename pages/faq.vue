<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'


const faqs = [
{
    question: "How often should I have my gutters cleaned?",
    answer:
    "We recommend cleaning your gutters at least twice a year: once in the spring and once in the fall. However, if you have overhanging trees or experience frequent storms, you may need more frequent cleanings.",
},
{
  question: "Do I need to be home for gutter cleaning?",
  answer: "No, you don’t need to be home as long as we have access to your gutters and your grounds for cleanup."
},
{
  question: "Can you clean gutters on tall or multi-story homes?",
  answer: "Yes, we have the equipment and expertise to safely clean gutters on multi-story homes and commercial buildings."
},
{
    question: "What types of gutters do you install?",
    answer:
    "We install seamless 5k gutter systems in a variety of colors.",
},
{
  question: "How long does it take to install new gutters?",
  answer: "Yes, we install high-quality gutters designed to protect your property and enhance its appearance."
},
{
  question: "Can you repair damaged gutters?",
  answer: "Absolutely! We can fix leaks, sagging sections, disconnected downspouts, and other common gutter issues. Repair services available to add on to gutter cleaning service."
},
{
  question: "Are your gutters custom-fit?",
  answer: "Yes, all of our gutters are measured and cut on-site to ensure a perfect fit for your home."
}

]

useHead({
    title: 'FAQ',
    meta: [
        { property: 'og:url', content: 'https://www.theguttersgreen.com/faq' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'FAQ' },
        { property: 'og:description', content: 'Frequently asked questions' },
    ]
    })

    defineOgImageComponent('GutterOg', {
        title: "The Gutters Green",
        description: "Frequently asked questions",
        headline: "Seamless Gutter Installation",
        image: "/images/gutter-carry.jpeg"
    })

</script>

<template>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
              <dt>
                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                  <span class="text-base/7 font-semibold">{{ faq.question }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon v-if="!open" class="size-6" aria-hidden="true" />
                    <MinusSmallIcon v-else class="size-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base/7 text-gray-600">{{ faq.answer }}</p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </template>
