import { defineStore } from 'pinia'
import axios from 'axios'

export const useHttpStore = defineStore({
  id: 'request',
  state: () => ({
    status: Number(localStorage.getItem('httpStatus')) || 0,
    responseTime: localStorage.getItem('httpResponseTime') || 0,
  }),
  actions: {
    async request() {
      const startTime = performance.now()

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const endTime = performance.now()

        this.status = response.status
        this.responseTime = (endTime - startTime).toFixed(2)
      } catch {
        console.log('Error')
      }

      localStorage.setItem('httpStatus', String(this.status))
      localStorage.setItem('httpResponseTime', String(this.responseTime))
    },
  },
})
