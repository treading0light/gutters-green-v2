<script setup>
const currentStep = ref(0)
const steps = [
    {
        "title": "Why Roof Moss Cleaning Is Essential",
        "text": "Over time, moss buildup can trap moisture against your roof, accelerating wear, loosening shingles, and even leading to costly leaks or structural damage. Regular moss removal not only extends the life of your roof, but also helps maintain your home’s curb appeal and resale value.",
        "image": "/images/before-after/square/rcb4.webp",
        "alt": "A roof with a bad moss infestation"
    },
    {
        "title": "Gentle Brushing to Remove Most Moss",
        "text": "We begin by carefully brushing the roof using specialized, non-damaging tools to physically remove the majority of moss growth. This step addresses approximately 95% of the moss and is done delicately to protect your roofing materials while effectively clearing the surface.",
        "image": "/images/before-after/square/rcd.webp",
        "alt": "A roof with moss being scrubbed off using a brush"
    },
    {
        "title": "Blowing Off Moss and Cleaning Gutters",
        "text": "Once the bulk of moss has been loosened, we use a blower to clear all remaining moss fragments, leaves, and other debris from the roof. This is followed by a full gutter cleaning to ensure your drainage system is working properly and won’t back up during heavy rains.",
        "image": "/images/before-after/square/rca4.webp",
        "alt": "A roof that has just been cleaned of all it's moss."
    },
    {
        "title": "Applying an Effective Moss Treatment",
        "text": "We finish the service by applying a powdered moss treatment to key areas of the roof. This treatment activates with rainfall, dissolving gradually into the surface. It helps remove any residual moss and continues to prevent new growth for months to come.",
        "image": "/images/before-after/square/treatment.webp",
        "alt": "A roof with moss treatment applied strategically. "
    },
    {
        "title": "Ongoing Roof Maintenance",
        "text": "To keep your roof in top condition, we recommend a full cleaning and moss treatment at least once a year. However, homes surrounded by trees or located in shaded, moist areas may benefit from more frequent debris removal to avoid buildup between treatments.",
        "image": "/images/before-after/square/treatment.webp",
        "alt": "A roof with moss treatment applied strategically. "
    },

]

const nextStep = () => {
    currentStep.value++
    console.log(currentStep.value)
}
</script>

<template>

  <section class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div class="max-w-4xl">
        <p class="text-base/7 font-semibold text-primary">Roof Cleaning</p>
        <h2 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">The Gutters Green Method</h2>
      </div>
      <section class="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
        <div class="lg:pr-8">
          <h3 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900">{{ steps[currentStep].title }}</h3>
          <p class="mt-6 text-2xl text-gray-600">{{ steps[currentStep].text }}</p>
          <button v-if="currentStep < steps.length -1" @click="nextStep()" class="btn btn-primary mt-10">Next</button>
          <a v-if="currentStep === 4" href="#contact" class="btn btn-primary mt-10">Get Free Quote</a>

        </div>
        <div class="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div class="-mx-8 grid grid-cols-4 gap-4 sm:-mx-16 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div class="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-300">
              <img alt="" :src="steps[0].image" class="block size-full object-cover transition duration-300"
              :class="currentStep === 0 || currentStep === 4 ? 'opacity-100 scale-110' : 'opacity-30 scale-100'" />
            </div>
            <div class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
              <img alt="" :src="steps[1].image" class="block size-full object-cover transition duration-300"
              :class="currentStep === 1 || currentStep === 4 ? 'opacity-100 scale-110' : 'opacity-30 scale-100'" />
            </div>
            <div class="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
              <img alt="" :src="steps[2].image" class="block size-full object-cover transition duration-300"
              :class="currentStep === 2 || currentStep === 4 ? 'opacity-100 scale-110' : 'opacity-30 scale-100'" />
            </div>
            <div class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
              <img alt="" :src="steps[3].image" class="block size-full object-cover transition duration-300"
              :class="currentStep === 3 || currentStep === 4 ? 'opacity-100 scale-110' : 'opacity-30 scale-100'" />
            </div>
          </div>
        </div>

      </section>
    </div>
  </section>
</template>
