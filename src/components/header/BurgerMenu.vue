<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BurgerMenu',
  data() {
    return {
      isOpen: false,
      navItems: [
        { name: 'Http', href: '#' },
        { name: 'Mqtt', href: '#' },
        { name: 'Compare', href: '#' },
      ],
    }
  },
  methods: {
    switchNav() {
      this.isOpen = !this.isOpen
    },
  },
})
</script>

<template>
  <button @click="switchNav" class="block sm:hidden">
    <FontAwesomeIcon :icon="isOpen ? 'xmark' : 'bars'" />
  </button>

  <div
    class="absolute w-full top-[100px] left-0 bg-dark-blue border-t border-accent-blue drop-shadow-xl"
    v-show="isOpen"
  >
    <a class="block py-6 px-4" v-for="item in navItems" :key="item.name" :href="item.href">{{
      item.name
    }}</a>
  </div>
</template>

<style></style>
