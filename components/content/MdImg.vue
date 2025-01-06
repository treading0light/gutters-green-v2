<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: false
    },
    caption: {
        type: String,
    }
})

console.log('image', props.image)
</script>

<template>
    <div class="mx-auto w-3/4">
        <NuxtImg :src="image" :alt="alt || ''" 
        class="my-0" :class="caption || caption === '' ? 'rounded-t-xl' : 'rounded-xl'"/>
        <div v-if="caption || caption === ''" class="rounded-b-xl px-10 pb-2 text-center my-0 bg-base-100 text-gray-100 text-sm">
            {{ caption === "" ? alt : caption }}
        </div>
    </div>
    
</template>