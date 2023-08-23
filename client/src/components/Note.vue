<template>
    <li class="note">
        <h2 class="note-title">{{ title }}</h2>
        <p class="note-content">{{ content }}</p>
        <button class="delete-button" @click="deleteClicked = true">Delete</button>
        <DeleteModal v-if="deleteClicked" v-model="deleteClicked"/>
    </li>
</template>

<script setup>
//////////////////////////////
// imports
import { useNotesStore } from '@/stores/notesStore.js'
import DeleteModal from './DeleteModal.vue';
import { ref } from 'vue';

//////////////////////////////
// props
const props = defineProps(["id", "title", "content"])

//////////////////////////////
// stores
const notesStore = useNotesStore()

const deleteClicked = ref(false)
const onDelete = () => deleteClicked.value = false
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
.delete-button {
    background-color: #ff4d4f;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.delete-button:hover {
    background-color: #d40c11;
}
</style>
