<template>
  <div class="modal">
    <div class="modal-content">
        <h1>Edit your note</h1>
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
            <button class="btn submit-btn" @click="updateNote">Update</button>
          </div>
        </form>
    </div>
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
// props
const props = defineProps(["modelValue", "noteId", "noteTitle", "noteContent"])
const emit = defineEmits(['update:modelValue'])

//////////////////////////////
// input
const enteredTitle = ref(props.noteTitle)
const enteredContent = ref(props.noteContent)

//////////////////////////////
// save new post
const updateNote = async() => {
  const updatedNote = {
    title: enteredTitle.value,
    content: enteredContent.value,
  }
  await notesStore.updateNote(updatedNote, props.noteId)
  await notesStore.getNotes()
  emit("update:modelValue", false)
}

//////////////////////////////
// cancel edit
const cancelEdit = () => {
  emit("update:modelValue", false)
}

</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    min-width: 500px;
    margin: 0 auto;
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
