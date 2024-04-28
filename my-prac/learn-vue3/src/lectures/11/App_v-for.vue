<template>
	<div>
		<ul v-for="(item, index) in evenItems" :key="item.id">
			<li>ID: {{ item.id }}, 인덱스: {{ index }}, {{ item.message }}</li>
		</ul>

		<!-- If 문을 같이 쓸 경우 -->
		<ul>
			<template v-for="(item, index) in evenItems" :key="item.id">
				<!-- <li v-if="item.id % 2 === 0"> -->
				<li>ID: {{ item.id }}, 인덱스: {{ index }}, {{ item.message }}</li>
			</template>
		</ul>
		<hr />
		<ul v-for="(value, key, index) in myObject" :key="key">
			<li>{{ index }}-{{ value }}-{{ key }}</li>
		</ul>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'CSS' },
			{ id: 3, message: 'Pyton' },
			{ id: 4, message: 'HTML' }
		]);

		// computed를 사용하는 방법
		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publshedAt: '2024-04-28'
		});
		return { items, evenItems, myObject };
	}
};
</script>

<style lang="scss" scoped></style>
