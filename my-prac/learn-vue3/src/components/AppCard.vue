<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" headerMessage="헤더 메시지">#Header</slot>
		</div>
		<!-- {{ $slots }} -->
		<div v-if="$slots.default" class="card-body">
			<slot childMessage="childMessage" helloMessage="하이룽">#Body</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-body-secondary">
			<slot name="footer" footerMessage="푸터 메시지">#Footer</slot>
		</div>
	</div>
	<br />
</template>

<script>
import { ref, computed } from 'vue';
export default {
	setup({ slots }) {
		const childMessage = ref('자식 메시지 임');

		const hasFooter = computed(() => !!slots.footer);
		return { childMessage, hasFooter };
	}
};
</script>

<style lang="scss" scoped></style>
