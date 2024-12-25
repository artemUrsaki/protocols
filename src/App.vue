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
  <header class="flex justify-between px-4">
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
