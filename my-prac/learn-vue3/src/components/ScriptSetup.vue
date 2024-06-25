<template>
	<div>
		{{ msg }}
		<hr />
		<br />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello">버어튼</button>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<hr />
		<TemplateRefsChild></TemplateRefsChild>
	</div>
	<hr />
	<MyButton class="parent-class"></MyButton>
</template>

<script setup>
import { ref } from 'vue';
import PostItem from './setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';
import axios from 'axios';

// setup 속성을 사용함으로써 리턴할 필요가 없다
const msg = 'helloooooooooo';
const sayHello = () => {
	alert('aslkdjflnsbkjnwklsjnv');
};

const message = ref('');
defineExpose({
	msg
});

// const response = await axios(
// 	'https://dummy.restapiexample.com/api/v1/employees'
// );
// console.log('response :', response);

async function callApi() {
	// axios('https://dummy.restapiexample.com/api/v1/employees').then(response => {
	// 	console.log('response :', response);
	// });
	const res = await axios('https://dummy.restapiexample.com/api/v1/employees');
	console.log('response :', res);
}
</script>

<style lang="scss" scoped></style>
