import { defineStore } from 'pinia'

export const useNotesStore = defineStore('noteStore', {
  state: () => ({
    notes: [
      {
        id: 0,
        title: 'This is title',
        content: 'Lorem ipsum Lorem ipsum',
      },
    ]
  }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  // actions: {
  //   increment() {
  //     this.count++
  //   },
  // },
})
