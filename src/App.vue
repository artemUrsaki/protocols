<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from '@/components/Navigation.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigation,
  },
})
</script>

<template>
  <header>
    <Navigation />
  </header>

  <main>
    <RouterView />
  </main>

  <h1>Hello</h1>
</template>

<style>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
  background-color: var(--color-background);
}
</style>
