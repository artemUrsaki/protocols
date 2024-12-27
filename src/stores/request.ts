import { defineStore } from 'pinia'
import axios from 'axios'

export const useRequestStore = defineStore({
  id: 'request',
  state: () => ({
    status: Number(localStorage.getItem('status')) || 0,
    responseTime: localStorage.getItem('responseTime') || 0,
  }),
  actions: {
    async httpRequest() {
      this.status = 0
      this.responseTime = 0

      const startTime = performance.now()

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const endTime = performance.now()

        this.status = this.status
        this.responseTime = (endTime - startTime).toFixed(2)
      } catch {
        console.log('Error')
      }

      localStorage.setItem('status', String(this.status))
      localStorage.setItem('responseTime', String(this.responseTime))
    },
  },
})
