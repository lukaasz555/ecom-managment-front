<template>
	<UButton :disabled="disabled">{{ buttonText }}</UButton>
</template>

<script setup lang="ts">
const props = defineProps(
	{
		type: {
			type: String,
			default: 'button',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		buttonText: {
			type: String,
			default: 'Save',
		},
	},
	{
		emits: ['click'],
	}
);
</script>
