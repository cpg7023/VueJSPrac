<template>
  <div>
    <button v-on:click="increment">클릭 {{ state.count }}</button>
    <button v-on:click="increment">딥 클릭 {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
// reactive 반응형 객체 실습
export default {
  setup() {
    const state = reactive({
      count: 0,
      deep: {
        count: 0
      }
    })

    const increment = () => {
      state.count++
      state.deep.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>

<style lang="scss" scoped></style>
