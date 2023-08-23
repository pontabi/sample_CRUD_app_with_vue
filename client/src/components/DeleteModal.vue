<template>
 <div class="modal">
    <div class="modal-content">
        <h3>Confirm Deletion</h3>
        <p>Are you sure you want to delete this note?</p>
        <button
          @click="$emit('update:modelValue', false)"
          class="cancel-button"
        >
          Cancel</button>
        <button class="delete-button" >Confirm</button>
    </div>
</div>
</template>

<script setup>
//////////////////////////////
// imports
import { useNotesStore } from '@/stores/notesStore.js'

//////////////////////////////
// stores
const notesStore = useNotesStore()

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

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
}

.delete-button, .cancel-button {
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.delete-button {
    background-color: #d9534f;
    color: #fff;
    margin-left: 10px;
}

.delete-button:hover {
  background-color: #db3732;
}

.cancel-button {
    background-color: #ccc;
    color: #000;
}

.cancel-button:hover {
  background-color: #aaa;
}

</style>
