<template>
  <div class="container">
        <h1>Post your note</h1>
        <form class="crud-form">
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

            <button type="submit" class="submit-button">Save</button>
          </form>
    </div>
</template>

<script setup>
//////////////////////////////
// imports
import { reactive, ref } from 'vue';

const enteredTitle = ref("")
const enteredContent = ref("")

const notes = reactive({
  id: new Date().valueOf(),
  title: "Hello",
  content: "Hello, this is the very first post"

})
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

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

.submit-button {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #0056b3;
}

</style>
