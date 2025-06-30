<script setup>
const props = defineProps({
    role: {
        type: String,
        default: 'user'
    },
    content: {
        type: String,
    }
})
</script>

<template>
<div>
    <div v-if="role == 'assistant'" class="chat chat-start">
    <div class="chat-image avatar">
        <div class="w-10 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="/images/myself.webp"
        />
        </div>
    </div>
    <div class="chat-header">
        Assistant
        <time class="text-xs opacity-50">12:45</time>
    </div>
    <div class="chat-bubble">{{ content }}<span v-if="content == ''" class="loading loading-dots loading-md"></span></div>
    <div class="chat-footer opacity-50">Delivered</div>
</div>

        <div v-if="role == 'user'" class="chat chat-end">
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
    <div class="chat-bubble">{{ content }}</div>
    <div class="chat-footer opacity-50">Seen at 12:46</div>
</div>
</div>

</template>