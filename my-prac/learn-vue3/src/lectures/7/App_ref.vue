<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="addMessage">add 버튼</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    let message = ref('Hello vue!')

    const addMessage = () => {
      message.value = message.value + '@'
    }

    console.log('message ', message)
    console.log('message typeof ', typeof message)

    return {
      message,
      addMessage
    }
  }
}
</script>

<style lang="scss" scoped></style>
