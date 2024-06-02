<template>
	<div>
		<h2>Input value</h2>
		<input type="text" v-model="inputValue" />
		<!-- v-bind:value="inputValue"
			@input="event => (inputValue = event.target.value)" -->
		<div>{{ inputValue }}</div>

		<div>Text Area value</div>
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>
		<hr />

		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input type="checkbox" id="checkbox" v-model="checkboxValue" />
		<!-- :checked="checkboxValue"
			@change="event => (checkboxValue = event.target.checked)" -->
		<hr />
		<h2>radio value</h2>
		<label>
			<input type="radio" name="type" value="O" />
			O형
		</label>
		<label>
			<input type="radio" name="type" value="A" />
			A형
		</label>
		<div>{{ radioValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref(true);
		const radioValue = ref('O');

		return { inputValue, textareaValue, checkboxValue, radioValue };
	}
};
</script>

<style lang="scss" scoped></style>
