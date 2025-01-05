<script setup>
const images = [
    "images/landing-gutter-pic.jpg",
    "images/landing-gutter-pic.jpg",
    "images/landing-gutter-pic.jpg",
]
</script>

<template>
    <main class="bg-white">

        <ContentDoc v-slot="{ doc }">
            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <NuxtImg :src="`/images${doc._path}/${doc.mainImage}`" 
                    class="aspect-video rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] lg:w-2/3 lg:mx-auto"/>
                    <div class="mx-auto max-w-2xl lg:mx-0">
                        <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ doc.title }}</h2>
                        <p class="mt-2 text-lg/8 text-gray-600">{{ doc.description }}</p>
                        <div class="flex text-sm text-gray-400">
                            <p>{{ doc.date }}</p>

                        </div>
                    </div>
                </div>
            </div>
            <article class="prose text-black mx-auto">
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>

    </main>
  </template>
  