<template>
	<div>
		<h2 v-if="visible">Hello Vue3!</h2>
		<h2 v-else>Flase 입니다.</h2>
		<button v-on:click="visible = !visible">toggle</button>
		<hr />
		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">A 다</h2>
		<h2 v-else-if="type === 'B'">B 다</h2>
		<h2 v-else-if="type === 'C'">C 다</h2>
		<h2 v-else>A도 B도 C도 아니다</h2>

		<hr />
		<template v-if="visible">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>

		<hr />
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const visible = ref(true);
		const type = ref('A');

		return { visible, type };
	}
};
</script>

<style lang="scss" scoped></style>
