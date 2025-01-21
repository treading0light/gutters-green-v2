<script setup>
    let lastScrollY = 0
    let isScrolling = false

    const handleScroll = () => {
    const currentScrollY = window.scrollY
    const element = document.getElementById('phoneModal')
    if (!element) return

    if (currentScrollY > lastScrollY) {
        
        element.classList.add('-translate-y-52')
        element.classList.remove('translate-y-0')
    } else {
        
        element.classList.add('translate-y-0')
        element.classList.remove('-translate-y-52')
    }

    lastScrollY = currentScrollY;
    }

    onMounted( () => {
        lastScrollY = window.scrollY
        window.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;

            setTimeout(() => {
            handleScroll()
            isScrolling = false
            }, 200)
        }
        });
    })
    
</script>

<template>
    <div id="phoneModal" class="fixed sm:block w-fit top-[100px] left-[45%] sm:left-[70%] text-white z-50 text-2xl
    bg-secondary p-3 rounded-xl bg-opacity-50 hover:bg-opacity-100 transition-transform duration-500">
        <a href="tel:253-248-4670">253-248-4670</a>
    </div>
</template>