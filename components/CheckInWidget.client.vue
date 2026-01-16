  <template>
    <div ref="container"></div>
  </template>

  <script setup>
  const apiKey = "hf_IM8ndcyIlG84AZZCRCVE6RwPAWpq8CpcZ1u424Yl"
  const container = ref(null)

  onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://www.healthyfleet.org/widget/checkin-widget.js'
    script.async = true
    script.onload = () => {
      const widget = document.createElement('hf-checkins')
      widget.setAttribute('api-key', apiKey)
      widget.setAttribute('map-height', '400px')
      container.value.appendChild(widget)
    }
    document.body.appendChild(script)
  })
  </script>

