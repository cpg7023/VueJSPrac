<template>
	<div id="modifiers">
		<div @click="clickDiv">
			Div 영역
			<p @click="clickP">
				P 영역
				<span @click.stop="clickSpan"> span 영역 </span>
				<a href="https://www.naver.com" @click.prevent.stop="clickA">
					a 영역
				</a>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			// 링크이동을 넣으면 여기까지 버블링 전파됨
			location.href = 'https://www.naver.com';
			console.log('clickDiv');
		};
		const clickSpan = () => {
			// 일반적으로 JS에서 이벤트 전파를 막는 메소드
			// e.stopPropagation();
			console.log('clickSpan');
			alert('좋아요');
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickA = () => {
			alert('어떤 기능');
		};

		return {
			clickDiv,
			clickSpan,
			clickP,
			clickA
		};
	}
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}

#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>
