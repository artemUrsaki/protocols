<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from '@/components/header/Navigation.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigation,
  },
})
</script>

<template>
  <Navigation />

  <main>
    <RouterView />
  </main>
</template>
