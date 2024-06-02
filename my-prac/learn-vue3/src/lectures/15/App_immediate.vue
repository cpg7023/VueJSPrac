<template>
	<div>{{ message }}</div>
	<div>{{ reverseMessage }}</div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
	setup() {
		const message = ref('Hello world');
		const reverseMessage = ref('');
		const reverseFunction = newValue => {
			console.log('즉시실행');
			reverseMessage.value = newValue.split('').reverse().join('');
		};

		/* 데이터 변경없이 최초 즉시 실행 */
		watch(message, reverseFunction, {
			immediate: false
		});

		reverseFunction(message.value);

		return { message, reverseMessage };
	}
};
</script>

<style lang="scss" scoped></style>
