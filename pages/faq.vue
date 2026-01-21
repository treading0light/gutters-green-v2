<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
{
    question: "What types of gutters do you install?",
    answer:
    "We install seamless 5k gutter systems in a variety of colors.",
},
{
  question: "How long does it take to install new gutters?",
  answer: "1-2 days in most cases, but larger projects may be different."
},
{
  question: "Can you repair damaged gutters?",
  answer: "Absolutely! We can fix leaks, sagging sections, disconnected downspouts, and other common gutter issues. Repair services available to add on to gutter cleaning service."
},
{
  question: "Are your gutters custom-fit?",
  answer: "Yes, all of our gutters are measured and cut on-site to ensure a perfect fit for your home."
},
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
  question: "Do you offer gutter guards?",
  answer: "Yes, we install gutter guards. It's important to note that gutter guards affect warranty terms and performance expectations. We have strong opinions on which products work best in the Pacific Northwest and will be happy to discuss options during your consultation."
},
{
  question: "What colors are available for seamless gutters?",
  answer: "We offer a variety of colors to match your home's exterior. Popular choices include white, brown, black, and bronze, among others."
},
{
  question: "Why choose seamless gutters over sectional?",
  answer: "Seamless gutters have fewer joints, which means fewer potential leak points and a cleaner appearance. They're custom-made on-site to fit your home perfectly, reducing maintenance needs and improving longevity."
},
{
  question: "What's the difference between 5K and 6K gutters?",
  answer: "5K gutters are 5 inches wide and are the standard size for most residential homes. 6K gutters are 6 inches wide and are typically used for homes with larger roof areas or in regions with heavy rainfall. We specialize in 5K seamless gutter systems."
},
{
  question: "How do I know if I need new gutters vs repairs?",
  answer: "If your gutters have multiple leaks, severe sagging, extensive rust, or are pulling away from your home in several places, replacement is likely the best option. Minor issues like a single leak or loose section can usually be repaired. We'll provide an honest assessment during our free estimate."
},
{
  question: "What areas do you serve?",
  answer: "We serve King County and Pierce County in Washington, including cities like Seattle, Tacoma, Federal Way, Bellevue, Kent, Auburn, and surrounding areas."
},
{
  question: "Are you licensed and insured?",
  answer: "Yes, we are fully licensed and insured for your protection and peace of mind."
},
{
  question: "What makes your installation different?",
  answer: "We offer hand-cut miter corners for superior craftsmanship, on-site custom fabrication for perfect fit, and our team has over 10 years of experience with advanced fall protection training. We take pride in attention to detail and leave your property spotless."
},
{
  question: "How do I maintain my gutters between cleanings?",
  answer: "Keep an eye out for overflow during rain, clear any visible debris from the ground level if safe to do so, and ensure downspouts are directing water away from your foundation. Schedule regular professional cleanings to prevent major issues."
}

]

const schemaFAQ = () => {
  a = []
  for (faq in faqs) {
    a.push({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })
  }
  console.log(a)
  return a
}

useHead({
    title: 'FAQ',
    meta: [
        { property: 'og:url', content: 'https://www.theguttersgreen.com/faq' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'FAQ' },
        { property: 'og:description', content: 'Frequently asked questions' },
    ],
    script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": schemaFAQ
          })
        }
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
