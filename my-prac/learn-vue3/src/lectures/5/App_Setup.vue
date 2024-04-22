<template>
	<div>
		<p>
			{{counter}}
		</p>
		<p>
			{{message}}
			asdasfas
		</p>
		<button @click="counter++">click!</button>
	</div>
</template>

<!-- <script>
import { ref } from 'vue';

	export default {
		setup(){
			const counter = ref(0);    //반응형 API를 사용하여 반응형 카운터 선언
			const message = ref('Hello Vue3');
			const increament = () => {
				counter.value++;
			};

			return{
				counter,
				message,
				increament,
			}
		}
	}
</script> -->

<script setup>
import { ref } from 'vue';

const counter = ref(0);

const increament = () => {
	counter.value++;
};
</script>

<style lang="scss" scoped>

</style>