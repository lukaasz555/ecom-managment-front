<template>
	<InputText
		v-model="inputValue"
		:placeholder="placeholder"
		variant="filled"
		:fluid="isFullWidth"
		:disabled="disabled"
		:type="type"
	/>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';

const emit = defineEmits<{
	(e: 'update:modelValue', val: string): void;
}>();

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

const inputValue = computed({
	get: () => props.modelValue,
	set: (value: string) => {
		emit('update:modelValue', value);
	},
});
</script>

<style scoped lang="scss">
.p-inputtext {
	border-radius: var(--p-border-radius-xs);
	padding: 10px 5px;
}
</style>
