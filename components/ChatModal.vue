<script setup>
import { ChatBubbleBottomCenterIcon, ArrowsPointingInIcon, MinusIcon, PlusIcon } from '@heroicons/vue/20/solid'
const currentSize = ref('small')
const newMessage = ref('')
const scrollBox = ref(null)
const classMap = {
    'small': 'bottom-5 right-5',
    'medium': 'w-96 bottom-5 right-5',
    'large': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]' 
}

const messages = ref([
    { 'role': 'assistant', 'content': 'Hello, I am an AI assistant created to assist you with your project. How can I help you?' },
])

const sendMessage = async (event) => {
    if (!event.shiftKey && newMessage.value != '') {
        messages.value.push({ 'role': 'user', 'content': newMessage.value }, {'role': 'assistant', 'content': ''})
        newMessage.value = ''
        try {
            const data = await $fetch('/api/ask', {
                method: 'POST',
                body: { messages: messages.value }
            })

            console.log(data.output)
            messages.value[messages.value.length - 1].content = data.output
            if (messages.value.length == 3) {
                logChat(messages.value)
            }
        } catch (error) {
            if (error?.response?.status === 429) {
                messages.value[messages.value.length - 1].content = "You've reached your hourly limit of AI messages. If you'd like your own private AI Assistant, send an email to tonygreen@theguttersgreen.com and I can build you one."
                logChat(messages.value)
            } else {
                console.error('API Error:', error)
                messages.value[messages.value.length - 1].content = "Sorry, something went wrong. Please try again shortly."
            }
        }
 
    }
}

const logChat = async (msgArray) => {
    try {
    const response = await $fetch('/api/log-chat', {
        method: 'POST',
        body: {
        messages: msgArray
        }
    });

    console.log('Transcript sent:', response.message);
    } catch (error) {
    if (error?.data?.message) {
        console.error('Server error:', error.data.message);
    } else {
        console.error('Unexpected error sending transcript:', error);
    }
    }
}

watch(messages.value, async () => {
  await nextTick()
  if (scrollBox.value) {
    scrollBox.value.scrollTop = scrollBox.value.scrollHeight
  }
})
</script>

<template>
    <div class="fixed" :class="classMap[currentSize]">



        <div v-show="currentSize != 'small'" class="flex flex-col justify-between bg-secondary/50 rounded-xl p-5 relative" 
        :class="currentSize == 'large' ? 'h-[75vh] pt-10' : 'h-[25vh]'">

            <div class="absolute flex top-5 right-5 z-50">
                <MinusIcon @click="currentSize == 'large' ? currentSize = 'medium' : currentSize = 'small'" 
                    class="fill-black h-6 w-6 text-black hover:cursor-pointer" />
                <PlusIcon v-if="currentSize != 'large'" @click="currentSize = 'large'"
                class="fill-black h-6 w-6 text-black hover:cursor-pointer" />   
            </div>

            <div ref="scrollBox" class="overflow-y-auto">
                <ChatMessage v-for="mes in messages" :role="mes.role" :content="mes.content" />           
            </div>




        <textarea v-model="newMessage" @keydown.enter.prevent="sendMessage" class="textarea w-full" placeholder="Chat"></textarea>
        </div>

        <div v-show="currentSize == 'small'">
            <ChatBubbleBottomCenterIcon @click="currentSize = 'medium'" class="fill-secondary w-20 h-20 lg:h-32 lg:w-32 hover:cursor-pointer" />
        </div>
    </div>



</template>