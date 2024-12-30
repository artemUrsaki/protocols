<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from './CustomButton.vue'

export default defineComponent({
  name: 'RequestTable',
  inheritAttrs: false,
  components: {
    CustomButton,
  },
})
</script>

<template>
  <div>
    <h1 class="text-lg font-normal uppercase text-gray-400"><slot name="title"></slot></h1>
    <h2 class="pt-2 mb-8"><slot name="responseTime"></slot> ms</h2>
    <CustomButton v-bind="$attrs">Make Request</CustomButton>
  </div>
</template>
