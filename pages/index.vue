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
        style="background-image: url(images/landing-gutter-pic.jpg);">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-lg">
                    <h1 class="mb-5 text-5xl font-bold">Reliable Gutter Solutions to Safeguard Your Home.</h1>
                    <p class="mb-5">
                        The Gutters Green are your experts for Gutter Cleaning, Repairs, and Installation – Delivered with Care and Precision.
                    </p>
                    <button class="btn btn-primary">Get a free quote!</button>
                </div>
            </div>
        </div>

        <Services id="services" />

        <About id="about" />

        <Contact id="contact" />


        <TabsWithContent :tabsData="tabsData" />

    </main>
    


</template>