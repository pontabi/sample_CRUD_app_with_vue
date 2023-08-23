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
    //////////////////////////////
    // CRUD for posts
    async createNote(newNote) {
      await axios.post(API_URL, newNote)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getNotes() {
      await axios.get(API_URL)
        .then((response) => {
          // handle success
          console.log(`getNotes-------`);
          console.log(this.notes);
          this.notes = response.data
          console.log(this.notes)
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
    },

    async updateNote() {
      return
    },

    async deleteNote(note_id) {
      await axios.delete(`${API_URL}/${note_id}`)
        .then(response => {
          console.log(`Deleted post with ID ${note_id}`);
        })
        .catch(error => {
          console.error(error);
        });
    }

  },
})
