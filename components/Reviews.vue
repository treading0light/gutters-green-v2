<template>
  <section class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <header class="mb-8 text-center">
      <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Reviews</h2>
      <p class="mt-1 text-xl text-gray-600 md:text-lg">See what people are saying about our services</p>
    </header>

    <figure v-for="review in reviews.featured" class="mx-auto max-w-2xl">
        <p class="sr-only">{{ review.rating }} out of 5 stars</p>
        <div class="flex gap-x-1 text-yellow-400">
            <StarIcon v-for="star in review.rating" class="size-8 flex-none" aria-hidden="true" />
        </div>
        <blockquote class="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
            <p>{{ review.content }}</p>
        </blockquote>
        <figcaption class="mt-10 flex items-center gap-x-6">
        <UserCircleIcon class="size-16 flex-none" />
            <div class="text-sm/6">
              <div class="font-semibold text-gray-900 text-xl">{{ review.author }}</div>
            </div>
        </figcaption>
    </figure>

    <a href="" class="font-semibold text-gray-900 text-xl justify-self-center self-center">See All Reviews</a>
</section>
  </template>
  
  <script setup>
  import { StarIcon, UserCircleIcon } from '@heroicons/vue/20/solid'
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
        content:"Excellent Service! Highly Recommend! I hired Tony from The Gutters Green to clean my gutters and remove algae growth from my roof. Not only did he do a thorough job, but he also offered helpful recommendations and even took care of a few minor repairs on the spot. He was respectful, professional, and worked quietly, which I really appreciated given the peaceful nature of my neighborhood. It’s clear he takes pride in his work and values his customers. I wouldn’t hesitate to call him again!",
        author: 'Alanmichael Directo',
        avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        link: 'https://g.co/kgs/U1C7S7V'
      },
      // More reviews...
    ],
  }
  </script>