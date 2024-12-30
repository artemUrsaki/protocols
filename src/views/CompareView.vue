<script lang="ts">
import { defineComponent } from 'vue'
import { useHttpStore } from '@/stores/httpRequest'
import { useMqttStore } from '@/stores/mqttRequest'

export default defineComponent({
  name: 'CompareView',
  data() {
    return {
      httpStore: useHttpStore(),
      mqttStore: useMqttStore(),
    }
  },
  computed: {
    httpStatus() {
      return this.httpStore.status
    },
    httpResponseTime() {
      return this.httpStore.responseTime
    },
    mqttResponseTime() {
      return this.mqttStore.responseTime
    },
    mqttMessage() {
      return this.mqttStore.message
    },
  },
  methods: {
    makeHttpRequest() {
      this.httpStore.request()
    },
    makeMqttRequest() {
      this.mqttStore.publishRequest('test message')
    },
  },
})
</script>

<template>
  <h1>{{ httpResponseTime }}</h1>
  <br />
  <button @click="makeHttpRequest">Make an HTTP request</button>

  <h2>{{ mqttMessage }}</h2>
  <h1>{{ mqttResponseTime }}</h1>
  <button @click="makeMqttRequest">Make an MQTT request</button>
</template>
