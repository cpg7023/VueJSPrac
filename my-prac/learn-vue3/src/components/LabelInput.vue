<template>
	<!-- class 와 style 속성은 병합이 된다 -->
	<label class="form-label" style="border: 1px solid black" id="child-id">
		{{ label }}
		<!-- <input v-model="username" type="text" /> -->
		<!-- <input
				:value="username"
				@input="event => $emit('update:modelValue', event.target.value)"
				type="text"
			/> -->
	</label>
	<input v-model="valueSet" type="text" class="form-control" />
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],

	setup(props, { emit }) {
		console.log(props.modelValue);
		const valueSet = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			}
		});
		return { valueSet };
	}
};
</script>

<style lang="scss" scoped></style>
