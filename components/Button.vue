<template>
	<Button
		:label="buttonText"
		:type="props.type"
		:loading="props.loading"
		:disabled="props.disabled"
		:fluid="isFullWidth"
		:severity="severity"
		@click="onClick"
	>
	</Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

const emit = defineEmits<{
	(e: 'click'): void;
}>();

const props = defineProps({
	type: {
		type: String as () => 'button' | 'submit' | 'reset',
		default: 'button',
	},
	buttonText: {
		type: String,
		default: 'button x',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	loading: {
		type: Boolean,
		default: false,
	},
	isFullWidth: {
		type: Boolean,
		default: false,
	},
	severity: {
		type: String as () =>
			| 'primary'
			| 'secondary'
			| 'success'
			| 'info'
			| 'warning'
			| 'danger'
			| 'help',
		default: 'primary',
	},
	isLink: {
		type: Boolean,
		default: false,
	},
	linkTo: {
		type: String,
		default: '',
	},
});

function onClick() {
	console.log('Button clicked');
	emit('click');
}
</script>

<style scoped lang="scss">
.p-button {
	border-radius: var(--p-border-radius-xs);
	padding: 10px 20px;
}
</style>
