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
    </div>
    <div class="chat-bubble">{{ content }}<span v-if="content == ''" class="loading loading-dots loading-md"></span></div>
</div>

        <div v-if="role == 'user'" class="chat chat-end">
    <div class="chat-image avatar">
        <div class="w-10 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src="/images/default-user.png"
        />
        </div>
    </div>
    <div class="chat-header">
        You
    </div>
    <div class="chat-bubble">{{ content }}</div>
</div>
</div>

</template>