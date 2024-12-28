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
    httpStatus() {
      return this.requestStore.httpStatus
    },
    httpResponseTime() {
      return this.requestStore.httpResponseTime
    },
    mqttResponseTime() {
      return this.requestStore.mqttResponseTime
    },
  },
  methods: {
    makeHttpRequest() {
      this.requestStore.httpRequest()
    },
    makeMqttRequest() {
      this.requestStore.mqttRequest()
    },
  },
})
</script>

<template>
  <p>{{ httpStatus }}</p>
  <br />
  <h1>{{ httpResponseTime }}</h1>
  <br />
  <button @click="makeHttpRequest">Make an HTTP request</button>

  <h1>{{ mqttResponseTime }}</h1>
  <button @click="makeMqttRequest">Make an MQTT request</button>
</template>
