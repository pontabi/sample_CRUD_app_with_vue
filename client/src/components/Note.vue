<template>
    <li class="note">
        <h2 class="note-title">{{ title }}</h2>
        <p class="note-content">{{ content }}</p>
        <div class="btn-container">
          <button class="btn edit-button" @click="editNote">Edit</button>
          <button class="btn delete-button" @click="deleteNote">Delete</button>
        </div>
        <DeleteModal v-if="deleteIsClicked" v-model="deleteIsClicked" :noteId="id"/>
        <EditModal
          v-if="editIsClicked"
          v-model="editIsClicked"
          :noteId="id"
          :noteTitle="title"
          :noteContent="content"
        />
    </li>
</template>

<script setup>
//////////////////////////////
// imports
import { useNotesStore } from '@/stores/notesStore.js'
import DeleteModal from './DeleteModal.vue';
import EditModal from './EditModal.vue';
import { ref } from 'vue';

//////////////////////////////
// Local Valiable
const deleteIsClicked = ref(false)
const editIsClicked = ref(false)

//////////////////////////////
// props
const props = defineProps(["id", "title", "content"])

//////////////////////////////
// stores
const notesStore = useNotesStore()

//////////////////////////////
// when delite clicked
const deleteNote = () => {
  deleteIsClicked.value = true
}

//////////////////////////////
// when edit clicked
const editNote = () => {
  editIsClicked.value = true
}


</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 20px;
}

/* Note styles */


.note {
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 15px;
    transition: transform 0.2s;
}

.note-title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
}

.note-content {
    font-size: 16px;
    color: #555555;
}

/* Button styles */
.btn-container {
  display: flex;
  justify-content: end;
}
.btn {
  width: 6rem;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.delete-button {
    background-color: #ff4d4f;
}

.delete-button:hover {
    background-color: #ff2125;
}

.edit-button {
    background-color: #50C878;
    margin-right: .5rem;
}

.edit-button:hover {
    background-color: #2bc05d;
}
</style>
