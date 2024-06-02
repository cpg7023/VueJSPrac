<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
	setup() {
		const message = ref('sdsdsd');
		console.log('adasdasdasd');
		watch(message, (newValue, oldValue) => {
			console.log('newValue :', newValue);
			console.log('oldValue :', oldValue);
		});
		return {
			message
		};
	}
};
</script>

<style lang="scss" scoped></style>
