import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
