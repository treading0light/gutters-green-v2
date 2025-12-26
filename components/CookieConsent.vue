<script setup>
import { ref } from 'vue'

// Initialize from localStorage immediately (client-side only)
const showBanner = ref(false)

// Only run on client side
if (process.client) {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    showBanner.value = true
  }
}

const acceptCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  showBanner.value = false

  // Update GA consent
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    })
  }

  // Reload to start tracking
  window.location.reload()
}

const declineCookies = () => {
  localStorage.setItem('cookie-consent', 'declined')
  showBanner.value = false

  // GA remains in denied state (no tracking)
}
</script>

<template>
  <ClientOnly>
    <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-lg z-50">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex-1">
        <p class="text-sm">
          We use cookies to analyze website traffic and optimize your experience.
          By accepting, you agree to our use of cookies for analytics purposes.
          <NuxtLink to="/privacy-policy" class="text-primary hover:underline ml-1">Learn more</NuxtLink>
        </p>
      </div>
      <div class="flex gap-3">
        <button @click="declineCookies" class="btn btn-ghost btn-sm">
          Decline
        </button>
        <button @click="acceptCookies" class="btn btn-primary btn-sm">
          Accept
        </button>
      </div>
    </div>
  </div>
  </ClientOnly>
</template>
