<script setup>
const props = defineProps({
    before: {
        type: String,
        required: true
    },
    after: {
        type: String,
        required: true
    }
})

const shownImage = ref(props.before)

const handleHover = () => {
    shownImage.value = props.after
    console.log('hovered')
}

const handleLeave = () => {
    shownImage.value = props.before
}
</script>

<template>

    <img :src="shownImage"
    @mouseover="handleHover()"
    @mouseleave="handleLeave" 
    class="rounded-xl"
    />
</template>