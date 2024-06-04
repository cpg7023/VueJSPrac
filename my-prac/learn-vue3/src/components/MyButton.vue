<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button
		</button>
	</div>
</template>

<script>
export default {
	emits: ['click'],
	// inheritAttrs: false,
	setup(props, context) {
		// console.log('context.arrts 출력 : ', context.attrs);
		// console.log('class : ', context.attrs.class);
		// console.log('id : ', context.attrs.id);
		// console.log('onClick : ', context.attrs.onClick);

		const sayHello = () => {
			context.emit('click');
		};
		return { sayHello };
	}
};
</script>

<style lang="scss" scoped></style>
