<template>
  <div>
    <P>author {{ author }}</P>
    <P>title {{ title }}</P>
    <P>year {{ year }}</P>
  </div>
</template>

<script>
import { ref, reactive, toRefs, toRef } from 'vue'

export default {
  setup() {
    const book = ref({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: '당신은 이 책을 지금 바로 읽습니다 ;)',
      price: '무료'
    })

    const { author, title } = toRefs(book.value)
    const year = toRef(book.value, 'year')

    return {
      author,
      title,
      book,
      year
    }
  }
}
</script>

<style lang="scss" scoped></style>
