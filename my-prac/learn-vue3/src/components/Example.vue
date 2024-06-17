<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
			<LabelInput :label="이름"></LabelInput>
			<hr />
			<FancyButton>Click!! <span style="color: red">@@@</span></FancyButton>
			<FancyButton #="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<hr />
			<AppCard>
				<!-- <template #[slotArgs]>제목입니다</template> -->
				<!-- <template v-slot:header>제목입니다</template> -->
				<!--<template #default>내용입니다</template>-->
				<!-- 디폴트 슬롯은 암시적으로 설정
				<template #footer>푸터입니다</template> -->
				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>
				<template #default="slotProps">
					{{ slotProps.childMessage }}
					<!-- {{ childMessage }} -->
				</template>
			</AppCard>
			<hr />
			<AppCard>게시글 입니다.</AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard
	},
	setup() {
		const sayHello = () => {
			alert('say Hello');
		};

		const slotArgs = ref('header');
		return { sayHello, slotArgs };
	}
};
</script>

<style lang="scss" scoped></style>
