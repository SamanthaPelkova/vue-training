<template>
  <header-of-app></header-of-app>
  <keyboard-events></keyboard-events>

</template>


<script lang="ts">
import KeyboardEvents from '@/components/Keyboard-events.vue'
import HeaderOfApp from '@/components/Header-of-app.vue'

export default {
  components: {
    KeyboardEvents,
    HeaderOfApp
  }

}

</script>

<style>
* {
  background: black;
}

</style>