<script setup>
const props = defineProps({
    sender: {
        type: String,
        default: 'user'
    },
    message: {
        type: String,
        default: 'I regret betraying you obi wan!'
    }
})
</script>

<template>
<div>
    <div v-if="sender == 'assistant'" class="chat chat-start">
    <div class="chat-image avatar">
        <div class="w-10 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
        />
        </div>
    </div>
    <div class="chat-header">
        Obi-Wan Kenobi
        <time class="text-xs opacity-50">12:45</time>
    </div>
    <div class="chat-bubble">You were the Chosen One!</div>
    <div class="chat-footer opacity-50">Delivered</div>
</div>

        <div v-if="sender == 'user'" class="chat chat-end">
    <div class="chat-image avatar">
        <div class="w-10 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
        />
        </div>
    </div>
    <div class="chat-header">
        Anakin
        <time class="text-xs opacity-50">12:46</time>
    </div>
    <div class="chat-bubble">{{ message }}</div>
    <div class="chat-footer opacity-50">Seen at 12:46</div>
</div>
</div>

</template>