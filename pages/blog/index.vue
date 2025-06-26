<script setup>


const { data: posts } = await useAsyncData('blog', () =>
  queryContent('/')
    .without(['body'])
    .where({ published: true })
    .sort({ date: -1 })
    .find()
);

useHead({
    title: 'The Gutters Green Blog',
    meta: [
        { property: 'og:url', content: 'https://www.theguttersgreen.com/about' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Blog' },
        { property: 'og:description', content: 'Blog posts by The Gutters Green' },
    ]
    })

    defineOgImageComponent('GutterOg', {
        title: "The Gutters Green Blog",
        description: "Blog posts on all things gutters!",
        headline: "Seamless Gutter Installation",
        image: "/images/gutters-laying.jpg"
    })

</script>

<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">The Gutter Blog</h2>
          <p class="mt-2 text-lg/8 text-gray-600">
          Throughout my many years of <strong>building</strong> and <strong>servicing gutters</strong>, 
          I have acquired a wealth of knowledge that I would like to share here. 
          From <strong>gutter installation tips</strong> to <strong>maintenance advice</strong> and 
          <strong>common repair solutions</strong>, this blog is your resource for protecting your home and getting
           the most out of your gutter system.</p>
        </div>
        <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          <article v-for="(post, index) in posts" :key="`post${index}`" class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <NuxtLink :to="post._path">
              <img :src="`/images${post._path}/${post.thumbnail}`" :alt="post.mainImageAlt" class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" ></div>
            </NuxtLink>

          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
              <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <NuxtLink :to="post._path" class="">
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ post.description }}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img :src="post.author.imageUrl" alt="" class="size-10 rounded-full bg-gray-100" />
              <div class="text-sm/6">
                <p class="font-semibold text-gray-900">
                  <a :href="post.author.href">
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ post.author.role }}</p>
              </div>
            </div>
          </div>
        </article>
        </div>
      </div>
    </div>
  </template>