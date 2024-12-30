<script lang="ts">
import { defineComponent } from 'vue'
import { useHttpStore } from '@/stores/httpRequest'
import { useMqttStore } from '@/stores/mqttRequest'
import RequestTable from '@/components/RequestTable.vue'

export default defineComponent({
  name: 'CompareView',
  components: {
    RequestTable,
  },
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
  <section
    class="flex flex-col items-center gap-y-16 bg-gradient-to-b from-accent-blue/25 to-accent-purple/25"
  >
    <RequestTable inheritAttributes @click="makeHttpRequest">
      <template #title>Http</template>
      <template #responseTime>{{ httpResponseTime }}</template>
    </RequestTable>

    <RequestTable @click="makeMqttRequest">
      <template #title>Mqtt</template>
      <template #responseTime>{{ mqttResponseTime }}</template>
    </RequestTable>
  </section>
</template>
