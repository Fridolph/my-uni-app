// stores/counter.ts
import { defineStore } from 'pinia'

const useResumeStore = defineStore('counter', {
  state: () => {
    return {
      info: {
        intro1: '热爱Coding，生命不息，折腾不止',
        intro2: '羽毛球爱好者，快乐挥拍，球场飞翔',
      },
    }
  },

  getters: {},

  actions: {},
})

export default useResumeStore
