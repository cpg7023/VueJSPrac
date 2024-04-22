<template>
  <!--isActive 값이 true일때는 액티브가 클래스에 바인딩-->
  <div class="text" :class="[isActive ? 'active' : 'class', errorClass, classObject]">
    텍스트 입니다
  </div>
  <button v-on:click="toggle">toggle</button>
  <button v-on:click="hasError = !hasError">ErrorToggle</button>
  <!-- <div class="text" :class="{ active: isActive, 'text-danger': hasError }"></div> -->
  <!-- <div class="text" :class="classObject"></div>
  <div :class="[activeClass, errorClass]"></div> -->
</template>

<script>
import { ref, computed } from 'vue'
import { reactive } from 'vue'

export default {
  setup() {
    const isActive = ref(true)
    const hasError = ref(false)

    const toggle = () => {
      isActive.value = !isActive.value
    }

    // const classObject = ref({
    //   active: true,
    //   'text-danger': true
    // })
    const classObject = computed(() => {
      return {
        active: true && true,
        'text-danger': true && true,
        'text-blue': true
      }
    })

    const activeClass = ref('active')
    const errorClass = ref('text-danger')

    return { isActive, toggle, hasError, classObject, activeClass, errorClass }
  }
}
</script>

<style scoped>
.active {
  font-weight: 900;
}
.text-danger {
  color: red;
}
</style>
