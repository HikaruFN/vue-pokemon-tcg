import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => (
    { count: 0, name: 'Eduardo' }//Placeholder
  ),
  getters: {
    doubleCount: (state) => state.count * 2,//Placeholder
  },
  actions: {
    increment() {//Placeholder
      this.count++
    },
  },
})
