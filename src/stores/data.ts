import { defineStore } from 'pinia'

export const useDataStore = defineStore({
  id: 'data',
  state: () => ({
    mqttData: JSON.parse(localStorage.getItem('mqttData') as string) || ([] as any),
    httpData: JSON.parse(localStorage.getItem('httpData') as string) || ([] as any),
  }),
  actions: {
    addMqttItem(totalLatency: number, messageLatency: number) {
      this.mqttData.push({
        totalLatency: totalLatency,
        messageLatency: messageLatency,
      })
      localStorage.setItem('mqttData', JSON.stringify(this.mqttData))
    },
    addHttpItem(latency: number, status: number) {
      this.httpData.push({
        latency: latency,
        status: status,
      })
      localStorage.setItem('httpData', JSON.stringify(this.httpData))
    },
    deleteMqttItem(index: number) {
      this.mqttData.splice(index, 1)
      localStorage.setItem('mqttData', JSON.stringify(this.mqttData))
    },
    deleteHttpItem(index: number) {
      this.httpData.splice(index, 1)
      localStorage.setItem('httpData', JSON.stringify(this.httpData))
    },
    clearMqttData() {
      this.mqttData = []
      localStorage.setItem('mqttData', JSON.stringify(this.mqttData))
    },
    clearHttpData() {
      this.httpData = []
      localStorage.setItem('httpData', JSON.stringify(this.httpData))
    },
  },
})
