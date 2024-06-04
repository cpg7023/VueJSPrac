<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
			<LabelInput :label="이름"></LabelInput>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';

export default {
	components: {
		MyButton,
		LabelInput
	},
	setup() {
		const sayHello = () => {
			alert('say Hello');
		};
		return { sayHello };
	}
};
</script>

<style lang="scss" scoped></style>
