<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: () => [
      { url: '/images/before.jpg', caption: 'Before Work Lorum Ipsum lda;sjfadls;nvafspuifrak;nfasd;khjfapdsofjapwornfdsa;lfnasd;kfjn' },
      { url: '/images/after.jpg', caption: 'After Work' },
    ],
  },
})

const currentIndex = ref(0)

const currentImage = computed(() => props.images[currentIndex.value])

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) currentIndex.value++;
}

const prevImage = () => {
  if (currentIndex.value > 0) currentIndex.value--;
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
  
    <!-- Caption -->
    <!-- <div class="caption">
      <h2>{{ currentImage.caption }}</h2>
    </div> -->

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
    <!-- <div class="controls">
      <button @click="prevImage" :disabled="currentIndex === 0">Previous</button>
      <button @click="nextImage" :disabled="currentIndex === images.length - 1">Next</button>
    </div> -->
  </div>
</template>

<style scoped>
.image-slider {
  position: relative;
  text-align: center;
  margin: 0px auto;
  width: 80%;
  max-width: 600px;
  overflow: hidden;
}

.caption {
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 10;
}

.slider-image {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  z-index: 1;
  display: block;
}

.controls {
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 100%
}

button {
  margin: 0 5px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Basic Fade Transition */
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
.v-enter-to, .v-leave-from {
  opacity: 1;
}
</style>