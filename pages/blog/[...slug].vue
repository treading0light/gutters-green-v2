<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug as string

const { data: doc } = await useAsyncData('blog/' + slug, () =>
  queryCollection('blog')
    .path(`/blog/${slug}`)
    .where('published', '=', true)
    .first()
);

useHead({
    title: 'Blog Post',
    meta: [
        { property: 'og:url', content: `https://www.theguttersgreen.com/blog/${slug}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Blog Post' },
        { property: 'og:description', content: 'An article from The Gutters Green' },
    ]
    })

if (doc.value) {
    defineOgImageComponent('GutterOg', {
        headline: "The Gutters Green Blog",
        title: doc.value.title,
        description: doc.value.description,
        image: `/images/blog/${slug}/${doc.value.ogimage}`,
        imageAlt: doc.value.mainImageAlt
    })

}

</script>

<template>
    <main v-if="doc" class="bg-white">

        <div  class="bg-white py-10">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <img :src="`/images${doc.path}/${doc.mainImage}`" :alt="doc.mainImageAlt"
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
        <article class="prose prose-2xl text-gray-700 prose-headings:text-gray-700 prose-strong:text-gray-700 prose-a:text-gray-500 prose-a:no-underline mx-auto
        prose-img:rounded-xl prose-img:w-1/2 prose-img:mx-auto">
            <ContentRenderer :value="doc" />
        </article>

        <article class="text-2xl text-gray-700 ">

        </article>

        <CTA />
    </main>
  </template>

  