<template>
  <div>
    <p>computed 방식 {{ hasLecture }}</p>
    <p>computed 방식 {{ hasLecture }}</p>
    <p>method 방식 {{ existLecture() }}</p>
    <p>method 방식 {{ existLecture() }}</p>
    <button v-on:click="counter++">클릭 {{ counter }}</button>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { reactive, ref, computed } from 'vue'
export default {
  setup() {
    const teacher = ref({
      name: '최필규',
      lectures: ['HTML', 'JS', 'Vue']
    })

    // computed 방식
    const hasLecture = computed(() => {
      console.log('computed ')
      return teacher.value.lectures.length ? '있🙂' : '없🥲'
    })

    // method 방식
    const existLecture = () => {
      console.log('method')
      return teacher.value.lectures.length ? '있🙂' : '없🥲'
    }

    const counter = ref(0)

    const firstName = ref('홍')
    const lastName = ref('동길')

    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(value) {
        ;[firstName.value, lastName.value] = value.split(' ')
      }
    })

    fullName.value = '최 필규'

    return { teacher, hasLecture, existLecture, counter, fullName }
  }
}
</script>

<style lang="scss" scoped></style>
