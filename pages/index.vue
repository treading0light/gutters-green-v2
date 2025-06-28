<script setup>

    const scrollToElement = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useHead({
    title: 'The Gutters Green',
    meta: [
        { property: 'og:url', content: 'https://www.theguttersgreen.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Home' },
        { property: 'og:description', content: 'seamless gutters for the greater Seattle-Tacoma area' },
    ],
    script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "The Gutters Green",
        "url": "https://www.theguttersgreen.com",
        "telephone": "+12532484670",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Federal Way",
          "addressRegion": "WA",
          "postalCode": "98023"
        },
        "areaServed": "King County, Pierce County",
        "description": "10+ years of experience installing and maintaining 5k gutter systems in Western Washington.",
        "image": "https://www.theguttersgreen.com/logo.png"
      })
    }
  ]
    })

    defineOgImageComponent('GutterOg', {
        title: "The Gutters Green",
        description: "Seamless gutters for the greater Seattle-Tacoma area.",
        headline: "Free Quotes!",
    })
</script>

<template>
    <main class="relative">
        <LazyPhoneModal />

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

            <LazyMiniService id="services" />

        <LazyAbout id="about" />

        <LazyContact id="contact" />




    </main>
    


</template>