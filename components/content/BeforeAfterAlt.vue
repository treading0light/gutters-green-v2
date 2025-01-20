<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: () => [
      { url: '/images/before.jpg', caption: 'Before Work Lorum Ipsum lda;sjfadls;nvafspuifrak;nfasd;k hjfapdsofjapwornfdsa; lfnasd;kfjn' },
      { url: '/images/after.jpg', caption: 'After Work' },
    ],
  },
})

const currentIndex = ref(0)

const currentImage =  props.images[0]

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) currentIndex.value++;
  console.log(currentIndex.value)
}

const prevImage = () => {
  if (currentIndex.value > 0) currentIndex.value--;
  console.log(currentIndex.value)

}

// const shownImage = ref(props.before)

// const handleHover = () => {
//     shownImage.value = props.after
//     console.log('hovered')
// }

// const handleLeave = () => {
//     shownImage.value = props.before
// }
</script>

<template>

<div class="flex flex-col items-center" >

    <div >
        <div class="caption">
        </div>

        <div class="relative p-0 w-full m-auto">
          <div v-for="(image, index) in images" :key="`image-${index}`"
              :class="[index === 0 ? 'block z-10' : `absolute top-0 left-0 z-[${index - 1}]`,
              currentIndex === index ? 'opacity-100' : 'opacity-0', 'w-full my-0 mx-auto p-0 transition-opacity duration-1000']">

          <h2 class="text-center">{{ image.caption }}</h2>

          <div class="flex justify-center">
            <button v-if="currentIndex !== 0" class="btn btn-primary" @click="prevImage" >Previous</button>
            <button v-if="currentIndex !== images.length - 1" class="btn btn-primary" @click="nextImage">Next</button>
          </div>

            <img class="w-[50%] mx-auto" :src="image.url" />

          </div>
        </div>

        
    </div>
    <!-- Caption -->
    

    <!-- Image Container -->
     <!-- <div class="image-slider min-h-screen">
      <Transition>
        <img
            v-if="currentImage"
            :src="currentImage.url"
            :alt="currentImage.caption"
            class="slider-image"    
            :key="`image-${ currentIndex }`"
          />
        

    </Transition>
     </div> -->
    

    <!-- Navigation Controls -->
    
  </div>
</template>