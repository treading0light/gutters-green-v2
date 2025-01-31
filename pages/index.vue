<script setup>
    const scrollToElement = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }

    defineOgImageComponent('Frame', {
        title: "The Gutters Green",
        description: "Seamless gutters for the greater Seattle-Tacoma area."
    })
</script>

<template>
    <main class="relative">
        <PhoneModal />

        <div class="hero min-h-screen" id="overview"
        style="background-image: url(images/gutters-laying.webp);">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-lg">
                    <h1 class="mb-5 text-5xl font-bold">Reliable Gutter Solutions to Safeguard Your Home.</h1>
                    <p class="mb-5 text-lg">
                        The Gutters Green are your experts for Seamless Gutter installation and Repairs – Delivered with Care and Precision.
                    </p>
                    <button @click="scrollToElement('contact')" class="btn btn-primary">Get a free quote!</button>
                </div>
            </div>
        </div>

        <Services id="services" />

        <About id="about" />

        <Contact id="contact" />




    </main>
    


</template>