<template>
	<InputText
		:placeholder="placeholder"
		variant="filled"
		:fluid="isFullWidth"
		:disabled="disabled"
		:type="type"
	/>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		default: undefined,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	isFullWidth: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String as () => 'text' | 'password',
		default: 'text',
	},
});
</script>

<style scoped lang="scss">
.p-inputtext {
	border-radius: var(--p-border-radius-xs);
	padding: 10px 5px;
}
</style>
