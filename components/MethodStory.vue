<script setup>
const currentStep = ref(1)
const steps = [
    {
        "title": "Why Roof Moss Cleaning Is Essential",
        "text": "Over time, moss buildup can trap moisture against your roof, accelerating wear, loosening shingles, and even leading to costly leaks or structural damage. Regular moss removal not only extends the life of your roof, but also helps maintain your home’s curb appeal and resale value.",
        "image": "/images/before-after/webp/rcb4.webp",
        "alt": "A roof with a bad moss infestation"
    },
    {
        "title": "Gentle Brushing to Remove Most Moss",
        "text": "We begin by carefully brushing the roof using specialized, non-damaging tools to physically remove the majority of moss growth. This step addresses approximately 95% of the moss and is done delicately to protect your roofing materials while effectively clearing the surface.",
        "image": "/images/before-after/webp/rcd.webp",
        "alt": "A roof with moss being scrubbed off using a brush"
    },
    {
        "title": "Blowing Off Moss and Cleaning Gutters",
        "text": "Once the bulk of moss has been loosened, we use a blower to clear all remaining moss fragments, leaves, and other debris from the roof. This is followed by a full gutter cleaning to ensure your drainage system is working properly and won’t back up during heavy rains.",
        "image": "/images/before-after/webp/rca4.webp",
        "alt": "A roof that has just been cleaned of all it's moss."
    },
    {
        "title": "Applying an Effective Moss Treatment",
        "text": "We finish the service by applying a powdered moss treatment to key areas of the roof. This treatment activates with rainfall, dissolving gradually into the surface. It helps remove any residual moss and continues to prevent new growth for months to come.",
        "image": "/images/before-after/webp/treatment.webp",
        "alt": "A roof with moss treatment applied strategically. "
    },
    {
        "title": "Ongoing Roof Maintenance",
        "text": "To keep your roof in top condition, we recommend a full cleaning and moss treatment at least once a year. However, homes surrounded by trees or located in shaded, moist areas may benefit from more frequent debris removal to avoid buildup between treatments.",
        "image": "/images/before-after/webp/treatment.webp",
        "alt": "A roof with moss treatment applied strategically. "
    },

]

const nextStep = () => {
    currentStep.value++
    console.log(currentStep.value)
}
</script>

<template>

        <section class="relative isolate overflow-hidden bg-gradient-to-b from-gray-100/20 pt-14" id="method">
            <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
            <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h2 class="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">Our Roof Cleaning Methods</h2>

                <div v-for="(step, index) in steps"
                :key="index"
                v-show="currentStep === index"
                class="transition-opacity duration-700">
                {{ index }}

                    <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <h3 class="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:col-span-2 xl:col-auto">{{ step.title }}</h3>
                        <p class="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">{{ step.text }}</p>
                        <div class="mt-10 flex items-center gap-x-6">
                            <button v-if="currentStep => steps.length" @click="nextStep" class="btn btn-primary">Next</button>
                            <a v-else href="#contact" class="btn btn-primary" >Contact Us</a>
                            <!-- <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a> -->
                        </div>
                    </div>
                    <img :src="step.image" :alt="step.alt" class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
                </div>

                </div>
            </div>
            <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </section>
</template>