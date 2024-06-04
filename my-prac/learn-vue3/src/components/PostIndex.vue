<template>
	<main>
		<div class="container py-4">
			<PostCreate @createPost="createPost"></PostCreate>

			<hr class="my-4" />

			<div class="container text-center">
				<div class="row g-3">
					<div v-for="post in posts" :key="post.id" class="col col-4">
						<AppCard
							:title="post.title"
							:contents="post.contents"
							:type="post.type"
							:isLike="post.isLike"
							@toggleLike="post.isLike = !post.isLike"
						></AppCard>
					</div>
				</div>

				<hr class="my-4" />
				<!--
				vue3에서는 내부적으로 아래 modelValue로 값을 전달하고 update 이벤트를 발생시켜 v-model을 구현한다.
				modelValue
				update:modelValue
				-->
				<!-- <LabelInput
					:modelValue="username"
					@update:modelValue="value => (username = value)"
				></LabelInput> -->
				<LabelInput
					v-model="username"
					label="이름"
					class="parent-class"
					style="color: red"
					id="parent-id"
				></LabelInput>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import UserName from '@/components/UserName.vue';
import { reactive, ref } from 'vue';
export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput
	},
	setup() {
		const obj = reactive({
			title: '제목2',
			contents: '내용2'
		});
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
			{ id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: false,
				type: 'notice'
			},
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: false,
				type: 'notice'
			}
		]);

		const createPost = newPost => {
			console.log('createPost: ', newPost);
			posts.push(newPost);
		};

		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return { obj, posts, createPost, username, firstname, lastname };
	}
};
</script>

<style lang="scss" scoped></style>
