<template>
	<label>
		{{ label }}
		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
	porps: ['title', 'label'],
	emits: ['update:title'],
	setup(props, { emit }) {
		console.log(props.modelValue);
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			}
		});
		return { value };
	}
};
</script>

<style lang="scss" scoped></style>
