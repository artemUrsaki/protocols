import { defineStore } from 'pinia'
import mqtt from 'mqtt'

export const useMqttStore = defineStore({
  id: 'mqtt',
  state: () => ({
    messageLatency: Number(localStorage.getItem('mqttMessageLatency')) || 0,
    totalLatency: Number(localStorage.getItem('mqttTotalLatency')) || 0,
  }),
  actions: {
    subscribe() {
      const topic = 'test'
      const client = mqtt.connect('wss://test.mosquitto.org:8081')
      const connectionStartTime = performance.now()
      client.on('connect', () => {
        console.log('Connected')
        client.subscribe(topic, () => {
          console.log('Subscribed')
          const subscribedStartTime = performance.now()

          client.on('message', (topic, message) => {
            const endTime = performance.now()
            console.log(message.toString())
            this.totalLatency = Number((endTime - connectionStartTime).toFixed(3))
            this.messageLatency = Number((endTime - subscribedStartTime).toFixed(3))
            localStorage.setItem('mqttTotalLatency', String(this.totalLatency))
            localStorage.setItem('mqttMessageLatency', String(this.messageLatency))
            client.end()
          })
        })
      })
    },
  },
})
