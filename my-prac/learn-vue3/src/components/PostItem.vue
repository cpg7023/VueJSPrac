<template>
	<div class="card">
		<div class="card-body">
			<!-- type: news, notice-->
			<span class="badge text-bg-secondary">{{ typeName }}</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<a href="#" class="btn" :class="isLikeClass">좋아요</a>
		</div>
		<button @click="toggleLike">toggle</button>
	</div>
</template>

<script>
import { onMounted } from 'vue';
import { computed, ref, useCssModule } from 'vue';

export default {
	emits: ['toggleLike'],
	props: {
		type: {
			type: String,
			defualt: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value);
			}
		},
		title: {
			type: String,
			required: true
		},
		contents: {
			type: String
			//required: true
		},
		isLike: {
			type: Boolean,
			default: false
		},
		obj: {
			type: Object,
			default: () => {}
		}
	},
	setup(props, context) {
		//console.log('props.title:', props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger'
		);

		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항'
		);

		const toggleLike = () => {
			context.emit('toggleLike');
		};
		return { isLikeClass, typeName, toggleLike };
	}
	// onMounted(props) {
	// 	const isListClass = computed(() =>
	// 		props.isLike ? 'btn-danger' : 'btn-outline-danger'
	// 	);
	// 	return { isListClass };
	// }
};
</script>

<style></style>

<!-- <style module>
.red {
	color: v-bind(color) !important;
}
</style> -->
<!-- <style scoped>
.red {
	color: red !important;
}
</style> -->
