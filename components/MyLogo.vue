<template>
    <NuxtLink to="/" class="flex flex-col hover:cursor-pointer">
        <p style="" class="text-2xl font-bold">The Gutters</p>
        <p class="text-4xl text-center font-bold">Green</p>
    </NuxtLink>
</template>

<script>
const goHome = async () => {
    await navigateTo('/')
    console.log('Navigated to home')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=Ruslan+Display&display=swap');

p {
/*    font-family: 'Oswald', sans-serif;*/
    font-family: 'Ruslan Display', cursive;
    background: -webkit-linear-gradient(#027c0a, #88c08a);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    /* text-shadow: 1px 1px rgba(216, 211, 211, 0.1); */
}
</style>