<script lang="ts">
import { defineComponent } from 'vue'
import { useRequestStore } from '@/stores/request'

export default defineComponent({
  name: 'CompareView',
  data() {
    return {
      requestStore: useRequestStore(),
    }
  },
  computed: {
    status() {
      return this.requestStore.status
    },
    responseTime() {
      return this.requestStore.responseTime
    },
  },
  methods: {
    makeRequest() {
      this.requestStore.httpRequest()
    },
  },
})
</script>

<template>
  <p>{{ status }}</p>
  <br />
  <h1>{{ responseTime }}</h1>
  <br />
  <button @click="makeRequest">Make a request</button>
</template>
