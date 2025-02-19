<template>
    <div id="map" class="map-container"></div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useHead } from '#app';
  import L from 'leaflet';
  
  // Using useHead for setting meta tags dynamically
  useHead({
    title: 'Service Area Map - Gutter Business',
    meta: [
      {
        name: 'description',
        content: 'Map showing the service area of King and Pierce Counties for gutter cleaning and installation services.'
      }
    ]
  });
  
  // Initialize map after the component is mounted
  
  onMounted(() => {
    const map = L.map('map').setView([47.5, -122.3], 8); // Centered on King/Pierce County area
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Fetch GeoJSON data for counties
    fetch('https://raw.githubusercontent.com/OpenDataDE/State-County-Geospatial-Data/main/WA_counties.geojson')
      .then(response => response.json())
      .then(data => {
        L.geoJSON(data, {
          filter: function (feature) {
            return feature.properties.NAME === 'King' || feature.properties.NAME === 'Pierce'; // Filter for specific counties
          },
          style: function (feature) {
            return { color: 'blue', weight: 2, fillOpacity: 0.1 };
          }
        }).addTo(map);
      })
      .catch(error => console.error('Error loading GeoJSON:', error));
  });
  </script>
  
  <style scoped>
  #map {
    height: 500px;
    width: 100%;
  }
  
  .map-container {
    position: relative;
    height: 100%;
  }
  </style>
  