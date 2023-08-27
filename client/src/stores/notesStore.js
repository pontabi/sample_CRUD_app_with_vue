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
      try {
        await axios.post(API_URL, newNote)
      } catch(error) {
        alert("Invalid post request")
      }
    },

    async getNotes() {
      try {
        const res = await axios.get(API_URL)
        this.notes = res.data
      } catch(error) {
        alert("Invalid get request")
        console.log(error);
      }
    },

    async updateNote(updatedNote, noteId) {
      try {
        await axios.patch(`${API_URL}/${noteId}`, updatedNote)
      } catch(error) {
        alert("Invalid patch request")
        console.log(error);
      }
    },

    async deleteNote(note_id) {
      try {
        await axios.delete(`${API_URL}/${note_id}`)
      } catch(error) {
        alert("Invalid delete request")
        console.error(error);
      }
    }

  },
})
