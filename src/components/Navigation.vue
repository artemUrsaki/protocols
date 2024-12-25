<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation',
  data() {
    return {
      navItems: [
        { name: 'Http', href: '#' },
        { name: 'Mqtt', href: '#' },
        { name: 'Compare', href: '#' },
      ],
    }
  },
})
</script>

<template>
  <RouterLink to="/">Home</RouterLink>

  <ul class="hidden sm:flex">
    <li v-for="item in navItems" :key="item.name">
      <a :href="item.href">{{ item.name }}</a>
    </li>
  </ul>

  <button>
    <FontAwesomeIcon icon="bars" class="" />
  </button>
</template>

<style>
a,
button {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 1rem;
  text-transform: uppercase;
}
</style>
