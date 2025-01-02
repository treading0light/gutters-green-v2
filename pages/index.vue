<script setup>
    const tabsData = [
        {
            title: 'Tab 1',
            content: 'Content for Tab 1',
        },
        {
            title: 'Tab 2',
            content: 'Content for Tab 2',
            images: ['https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'],
        },
        {
            title: 'Tab 3',
            content: 'Content for Tab 3',
        },
    ]
</script>

<template>
    <main>
        <div class="hero min-h-screen" id="overview"
        style="background-image: url(images/landing-gutter-pic-dark.jpg);">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Your Local Gutter Guy</h1>
                <p class="mb-5">
                    Providing expert gutter services to the Seattle-Tacoma area and beyond
                </p>
                <button class="btn btn-primary">Get a free quote!</button>
                </div>
            </div>
        </div>

        <Services id="services" />

        <TabsWithContent :tabsData="tabsData" />

    </main>
    


</template>