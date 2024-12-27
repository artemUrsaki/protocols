<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from '@/components/header/Navigation.vue'
import FooterSection from './components/FooterSection.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigation,
    FooterSection,
  },
})
</script>

<template>
  <Navigation />

  <main class="flex-1">
    <RouterView />
  </main>

  <FooterSection />
</template>
