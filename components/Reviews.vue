<template>
  <section class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <figure class="mx-auto max-w-2xl">
        <p class="sr-only">5 out of 5 stars</p>
        <div class="flex gap-x-1 text-indigo-600">
            <StarIcon class="size-5 flex-none" aria-hidden="true" />
            <StarIcon class="size-5 flex-none" aria-hidden="true" />
            <StarIcon class="size-5 flex-none" aria-hidden="true" />
            <StarIcon class="size-5 flex-none" aria-hidden="true" />
            <StarIcon class="size-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote class="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
            <p>I built a shop for a customer. Needed gutters and Tony@ The Gutters Green did a professional install.</p>
        </blockquote>
        <figcaption class="mt-10 flex items-center gap-x-6">
            <img class="size-12 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80" alt="" />
            <div class="text-sm/6">
            <div class="font-semibold text-gray-900">Mike Craig</div>
            <div class="mt-0.5 text-gray-600">CEO of Workcation</div>
            </div>
        </figcaption>
    </figure>
</section>
  </template>
  
  <script setup>
  import { StarIcon } from '@heroicons/vue/20/solid'
  const placeId = "ChIJWe2DgT3Gz0kRDvbUofN6Zv0"
  
  const reviews = {
    average: 4,
    totalCount: 1624,
    counts: [
      { rating: 5, count: 1019 },
      { rating: 4, count: 162 },
      { rating: 3, count: 97 },
      { rating: 2, count: 199 },
      { rating: 1, count: 147 },
    ],
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
          <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
        `,
        author: 'Mike Craig',
        avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        link: 'https://g.co/kgs/U1C7S7V'
      },
      // More reviews...
    ],
  }
  </script>