<template>
  <div class="container">
      <h1>Post your note</h1>
      <form class="crud-form" @submit.prevent>
          <label for="title">Title:</label>
          <input
            v-model="enteredTitle"
            class="input-field"
            name="title"
            placeholder="Enter title"
            type="text"
          >

          <label for="content">Content:</label>
          <textarea
            v-model="enteredContent"
            class="input-field"
            name="content"
            placeholder="Enter content"
          ></textarea>
          <div class="btn-container">
            <button class="btn cancel-btn" @click="cancelEdit">Cancel</button>
            <button class="btn submit-btn" @click="savePost">Save</button>
          </div>
        </form>
  </div>
</template>

<script setup>
//////////////////////////////
// imports
import { reactive, ref } from 'vue';
import { useNotesStore } from '@/stores/notesStore.js'

//////////////////////////////
// stores
const notesStore = useNotesStore()

//////////////////////////////
// input
const enteredTitle = ref("")
const enteredContent = ref("")

//////////////////////////////
// save new post
const savePost = () => {
  const newPost = {
    title: enteredTitle.value,
    content: enteredContent.value,
  }
  notesStore.createNote(newPost)
  notesStore.getNotes()
  enteredTitle.value = ""
  enteredContent.value = ""
}

</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.crud-form {
    display: grid;
    gap: 10px;
}

label {
    font-weight: bold;
}

.input-field {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.textarea-field {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
}
.btn {
  width: 6rem;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.btn.submit-btn {
  background-color: #007bff;
  color: #ffffff;
}

.btn.cancel-btn {
  background-color: #ccc;
  color: #111;
  margin-right: .5rem;
}

.btn.submit-btn:hover {
    background-color: #0056b3;
}
.btn.cancel-btn:hover {
  background-color: #999;
}
</style>
