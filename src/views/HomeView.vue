<script lang="ts">
import { defineComponent } from 'vue'
import HeroSection from '@/components/main/HeroSection.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
  },
})
</script>

<template>
  <HeroSection />
</template>
