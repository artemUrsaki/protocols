<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export interface NavItem {
  name: string
  href: string
}

export default defineComponent({
  name: 'BurgerMenu',
  props: {
    navItems: {
      type: Array as PropType<NavItem[]>,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
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
  <button @click="switchNav" class="block sm:hidden px-4">
    <FontAwesomeIcon :icon="isOpen ? 'xmark' : 'bars'" />
  </button>

  <div
    class="block sm:hidden absolute w-full top-[100px] left-0 bg-dark-blue border-t border-accent-blue drop-shadow-xl"
    v-show="isOpen"
  >
    <a class="block py-6 px-12" v-for="item in navItems" :key="item.name" :href="item.href">{{
      item.name
    }}</a>
  </div>
</template>

<style></style>
