<script setup>
const props = defineProps({
    images: {
        type: Array, // Specify the type as Array
        required: true, // Mark it as required
        validator: (value) => value.every((item) => typeof item === 'string'), // Validate array elements are strings
    },
})
</script>

<template>
    <div>
        <div class="carousel w-full">
            <div v-for="(image, index) in images" :id="`img${index}`" class="carousel-item w-full">
                <img
                :src="image"
                class="w-full" />
            </div>
        </div>

        <div class="flex w-full justify-center gap-2 py-2">
            <a v-for="(imnage, index) in images" :href="`#img${index}`" class="btn btn-xs">1</a>
        </div>
    </div>
</template>