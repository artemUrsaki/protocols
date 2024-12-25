<script lang="ts">
import { defineComponent } from 'vue'
import BurgerMenu from '@/components/header/BurgerMenu.vue'

export default defineComponent({
  name: 'Navigation',
  components: {
    BurgerMenu,
  },
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
  <RouterLink class="flex h-[100px] items-center px-4 uppercase" to="/">Home</RouterLink>

  <ul class="hidden sm:flex">
    <li v-for="item in navItems" :key="item.name">
      <a class="flex h-[100px] items-center px-4 uppercase" :href="item.href">{{ item.name }}</a>
    </li>
  </ul>

  <BurgerMenu :navItems="navItems" />
</template>
