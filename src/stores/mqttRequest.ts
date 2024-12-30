import { defineStore } from 'pinia'
import mqtt from 'mqtt'

export const useMqttStore = defineStore({
  id: 'mqtt',
  state: () => ({
    client: null as mqtt.MqttClient | null,
    message: localStorage.getItem('mqttMessage'),
    responseTime: localStorage.getItem('mqttResponseTime'),
    topic: 'topic/test',
    startTime: 0,
  }),
  actions: {
    clientInit(requestMessage: string) {
      this.client = mqtt.connect('wss://test.mosquitto.org:8081')

      this.client.on('connect', () => {
        console.log('Client is connected')
        this.client!.subscribe(this.topic, (err) => {
          if (err) {
            console.log('Error with subscribing: ' + err)
          } else {
            console.log('Client is subscribed')
            this.client!.on('message', (topic, message) => {
              const endTime = performance.now()
              this.message = message.toString()
              this.responseTime = (endTime - this.startTime).toFixed(2)

              localStorage.setItem('mqttMessage', String(this.message))
              localStorage.setItem('mqttResponseTime', String(this.responseTime))
            })
            this.publish(requestMessage)
          }
        })
      })
    },
    publishRequest(requestMessage: string) {
      if (!this.client || this.client.disconnected) {
        this.clientInit(requestMessage)
      } else {
        this.publish(requestMessage)
      }
    },
    publish(requestMessage: string) {
      this.startTime = performance.now()
      this.client!.publish(this.topic, requestMessage)
      console.log('message published')
    },
  },
})
