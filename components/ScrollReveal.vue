<template>
  <div
    ref="el"
    :class="[
      'transition-all duration-700 ease-out',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const el = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )

  if (el.value) observer.observe(el.value)
})
</script>