<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation',
})
</script>

<template>
  <div class="container">
    <RouterLink class="home" to="/">Home</RouterLink>
    <ul class="nav">
      <li><a href="">Http</a></li>
      <li><a href="">Mqtt</a></li>
      <li><a href="">Compare</a></li>
    </ul>
  </div>
</template>

<style>
.container {
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.container a {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 1rem;
  text-transform: uppercase;
}

.nav {
  display: flex;
}
</style>
