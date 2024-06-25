<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }},
			{{ $refs.input.value === input.value }}
		</p>

		<hr />
		<ul>
			<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
export default {
	components: {
		TemplateRefsChild
	},
	setup() {
		const input = ref(null);

		console.log('input', input.value);
		onMounted(() => {
			input.value.value = 'ㅈㅇㅂㄵ';
			console.log('input', input.value);

			// itemRefs.value.forEach(item => console.log('item: ', item.textContent));
			itemRefs.value.forEach(item => console.log('item: ', item));

			// ref 사용해서 자식 컴포넌트 요소들 출력
			console.log('child.message :', child.value.message);
			child.value.sayHello();
		});

		const itemRefs = ref([]);
		const fruits = ref(['사과', '딸기', '포도']);

		const child = ref(null);
		return { input, fruits, itemRefs, child };
	}
};
</script>

<style lang="scss" scoped></style>
