import { defineStore } from 'pinia'
import axios from 'axios'
import mqtt from 'mqtt'

export const useRequestStore = defineStore({
  id: 'request',
  state: () => ({
    httpStatus: Number(localStorage.getItem('httpStatus')) || 0,
    httpResponseTime: localStorage.getItem('httpResponseTime') || 0,
    mqttResponseTime: localStorage.getItem('mqttResponseTime') || 0,
  }),
  actions: {
    async httpRequest() {
      const startTime = performance.now()

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const endTime = performance.now()

        this.httpStatus = response.status
        this.httpResponseTime = (endTime - startTime).toFixed(2)
      } catch {
        console.log('Error')
      }

      localStorage.setItem('httpStatus', String(this.httpStatus))
      localStorage.setItem('httpResponseTime', String(this.httpResponseTime))
    },
    mqttRequest() {
      const topic = 'topic/test'

      const startTime = performance.now()

      const client = mqtt.connect('wss://test.mosquitto.org:8081')
      client.on('connect', () => {
        client.subscribe(topic, (err) => {
          if (!err) {
            client.publish(topic, 'Test message')
          }
        })
      })

      client.on('message', (topic, message) => {
        console.log(message.toString())
        const endTime = performance.now()
        this.mqttResponseTime = (endTime - startTime).toFixed(2)
        client.end()
      })

      localStorage.setItem('mqttResponseTime', String(this.mqttResponseTime))
    },
  },
})
