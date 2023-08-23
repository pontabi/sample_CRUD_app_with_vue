<template>
  <Form />
  <div class="container">
    <h1>Posts</h1>
    <ul class="note-list">
      <Note
        v-for="note in notesStore.notes"
        :key="note.id"
        :id="note.id"
        :title="note.title"
        :content="note.content"
      />
    </ul>
  </div>
</template>

<script setup>
//////////////////////////////
// imports
import { reactive } from "vue"
import { useNotesStore } from "@/stores/notesStore.js"
import Form from "./Form.vue"
import Note from "./Note.vue"

//////////////////////////////
// notes
const notesStore = useNotesStore()
console.log(notesStore.notes[0].content);

const updatePost = async() => {
  console.log(' updatePost');
  return true
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

.note-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

</style>
