<script lang="ts">
import { defineComponent } from 'vue'
import data from '@/data/data.json'
import { isTemplateMiddle } from 'typescript'

export default defineComponent({
  name: 'NavItems',
  computed: {
    navItems() {
      return data.nav
    },
  },
})
</script>

<template>
  <li class="list-none" v-for="item in navItems" :key="item.name">
    <RouterLink :to="item.route">{{ item.name }}</RouterLink>
  </li>
</template>
