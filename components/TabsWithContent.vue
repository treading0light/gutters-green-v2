<script setup>
    defineProps({
        tabsData: {
            type: Array,
            required: true,
            default: () =>{
                console.log('Default value is being used')
                return []
            },
        }
    })

    const activeTab = ref(0)

    // console.log(tabsData)

</script>

<template>
    <div>
        <div role="tablist" class="tabs tabs-boxed text-black">
            <a
            v-for="(tab, index) in tabsData"
            :key="index"
            role="tab"
            :class="['tab', { 'tab-active text-white [--tab-bg:primary]': activeTab === index }]"
            @click="activeTab = index"
            >
            {{ tab.title }}
            </a>
        </div>
        <div>
            <div class="p-10" v-for="(tab, index) in tabsData" :key="index" v-show="activeTab === index">
                <div v-if="tab.images">
                    There was at least one image
                </div>
                {{ tab.content }}
            </div>
        </div>
    </div>
    
</template>