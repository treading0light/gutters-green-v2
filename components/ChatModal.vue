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
    { 'sender': 'assistant' },
    { 'sender': 'user' },
])

const sendMessage = (event) => {
    if (!event.shiftKey) {
        messages.value.push({ 'sender': 'user', 'message': newMessage.value })
        newMessage.value = ''
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
                <ChatMessage v-for="mes in messages" :sender="mes.sender" :message="mes.message" />           
            </div>




        <textarea v-model="newMessage" @keydown.enter.prevent="sendMessage" class="textarea w-full" placeholder="Bio"></textarea>
        </div>

        <div v-show="currentSize == 'small'">
            <ChatBubbleBottomCenterIcon @click="currentSize = 'medium'" class="fill-secondary w-20 h-20 lg:h-32 lg:w-32 hover:cursor-pointer" />
        </div>
    </div>



</template>