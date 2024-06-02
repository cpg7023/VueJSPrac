<template>
	<div></div>
</template>

<script>
import { ref, watch, reactive } from 'vue';
export default {
	setup() {
		const x = ref(0);
		const y = ref(0);
		const obj = reactive({
			count: 0
		});

		// // 일반적인 JS 함수 선언법
		// watch(function funcName(x, y) {
		// 	console.log(x, y);
		// });

		/* 익명 + arrow function 사용 */
		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('sum: ', sum);
		// 		console.log('oldValue: ', oldValue);
		// 	}
		// );

		/* 인자로 array 넘기기 */
		// watch([x, y], ([newx, newy]) => {
		// 	console.log(newx, newy);
		// });

		/* 인자로 객체받기 */
		// obj.count 로 해서 직접 count를 넘겨 받으면 watch가 작동하지 않는다
		// count는 객체의 프로퍼티로서 반응형데이터 타입이 아닌 number 이기 때문
		// count를 정상적으로 가져오기 위해선 getter () => obj.count로 넘겨줘야 한다
		// watch(obj, (newValue, oldValue) => {
		// 	console.log('newValue: ', newValue);
		// 	console.log('oldValue: ', oldValue);
		// });

		watch(obj, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		});

		return {
			x,
			y,
			obj
		};
	}
};
</script>

<style lang="scss" scoped></style>
