<template>
  <div class="form-inputs">
    <input type="text"> <button @click="">změnit</button><br>
    <input type="text"> <button @click="">změnit</button><br>
    <input type="text"> <button @click="">změnit</button><br>
    <input type="email"> <button @click="">změnit</button><br>
    <button class="submit-button">odeslat</button>
  </div>

</template>

<script>
import {ref} from "vue";
import {defaultInputInfo} from "@/components/Keyboard-events";
import KeyboardEvents from "@/components/Keyboard-events.vue";

export default {


  setup(){
    const test = ref<KeyboardEvents>(defaultInputInfo())




    return {
      test
    }

  }

}


</script>

<style>
* {
  text-align: center;
}

.form-inputs input {
  margin-top: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid greenyellow;
  background-color: black;
  padding: 5px;
}

.form-inputs .submit-button{
  cursor: pointer;
  margin-top: 10px;
  font-size: 25px;
  width: 17%;
  border-radius: 15px;
  border: 2px solid greenyellow;
  background-color: greenyellow;
  color: black;
  padding: 5px;
}

.form-inputs button{
  cursor: pointer;
  margin-top: 10px;
  font-size: 20px;
  width: 10%;
  border-radius: 15px;
  border: 2px solid greenyellow;
  background-color: rgba(173, 255, 47, 0.63);
  color: white;
  padding: 5px;
}

h3 {
  color: white;
}

h1{
  font-size: 30px;
  color: white;
}


</style>