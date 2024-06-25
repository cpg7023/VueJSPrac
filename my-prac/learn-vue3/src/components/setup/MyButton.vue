<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" v-bind="$attrs">
			My Button {{ message }}
		</button>
	</div>
</template>

<script>
export default {
	inheritAttrs: false
	// console.log('context.arrts 출력 : ', context.attrs);
	// console.log('class : ', context.attrs.class);
	// console.log('id : ', context.attrs.id);
	// console.log('onClick : ', context.attrs.onClick);
};
</script>

<script setup>
import { ref } from 'vue';
const message = ref('message');
</script>

<style lang="scss" scoped></style>
