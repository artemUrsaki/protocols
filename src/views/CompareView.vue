<script lang="ts">
import { defineComponent } from 'vue'
import { useDataStore } from '@/stores/data'

export default defineComponent({
  name: 'Compare',
  data() {
    return {
      dataStore: useDataStore(),
    }
  },
  computed: {
    mqttData() {
      return this.dataStore.mqttData
    },
    httpData() {
      return this.dataStore.httpData
    },
  },
  methods: {
    deleteMqttItem(index: number) {
      this.dataStore.deleteMqttItem(index)
    },
    deleteHttpItem(index: number) {
      this.dataStore.deleteHttpItem(index)
    },
    clearMqtt() {
      this.dataStore.clearMqttData()
    },
    clearHttp() {
      this.dataStore.clearHttpData()
    },
  },
})
</script>

<template>
  <h1>Mqtt</h1>
  <div v-for="(item, index) in mqttData" :key="item.id">
    <p>{{ item.totalLatency }}</p>
    <p>{{ item.messageLatency }}</p>
    <button @click="deleteMqttItem(index)">remove</button>
  </div>
  <button @click="clearMqtt">Clear</button>
  <h1>Http</h1>
  <div v-for="(item, index) in httpData" :key="item.id">
    <p>{{ item.latency }}</p>
    <p>{{ item.status }}</p>
    <button @click="deleteHttpItem(index)">remove</button>
  </div>
  <button @click="clearHttp">Clear</button>
</template>
