<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">Click!</button>
    <hr />
    <h2>HTML</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <hr />
    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTitle">마우스를 올려보세염</div>
    <input type="text" value="홍길동" :disabled="isInputDisabled" />
    <input v-bind="attrs" />
    <h2>자바 스크립트</h2>
    {{ message.split('').reverse().join('') }}
    <br />
    {{ isInputDisabled ? '예' : '아니오' }}
    <input type="text" :placeholder="`입력해주세요 ${isInputDisabled}`" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('안녕하세요')

    const rawHtml = ref('<strong>안녕하세요</strong>')

    const dynamicTitle = ref('안녕안녕하세여')
    const isInputDisabled = ref(false)
    const attrs = ref({
      type: 'text',
      value: 'pw',
      disabled: true,
      placeholder: '비밀번호를 입력'
    })

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs
    }
  }
}
</script>

<style lang="scss" scoped></style>
