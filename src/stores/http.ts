import { defineStore } from 'pinia'
import axios from 'axios'

export const useHttpStore = defineStore({
  id: 'http',
  state: () => ({
    latency: Number(localStorage.getItem('httpLatency')) || 0,
    status: Number(localStorage.getItem('httpContent')) || 0,
  }),
  actions: {
    async request() {
      try {
        const startTime = performance.now()
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        const endTime = performance.now()

        this.latency = Number((endTime - startTime).toFixed(2))
        this.status = response.status
      } catch {
        console.log('Error')
      }

      localStorage.setItem('httpLatency', String(this.latency))
      localStorage.setItem('httpContent', String(this.status))
    },
  },
})
