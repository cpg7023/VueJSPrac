<template>
  <div>
    <p></p>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    //ref -> Objects
    const counter = ref(0)
    const state = reactive({
      counter
    })
    counter.value++
    console.log(counter.value)
    console.log('state.counter', state.counter)

    //ref -> Array
    const message = ref('Hello')
    const arr = reactive([message])
    console.log(message.value)
    console.log('arr[0]: ', arr[0].value)

    return {}
  }
}
</script>

<style lang="scss" scoped></style>
