import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = "http://localhost:3000/posts"

export const useNotesStore = defineStore('noteStore', {
  state: () => ({
    notes: []
  }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  actions: {
    // post new note
    async createNote(newNote) {
      axios.post(API_URL, newNote)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    },
    async getNotes() {
      console.log(this);
      axios.get(API_URL)
        .then((response) => {
          // handle success
          const newNotes = response.data
          this.notes = newNotes
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
    },

    updateNote() {
      return
    },

  },
})
