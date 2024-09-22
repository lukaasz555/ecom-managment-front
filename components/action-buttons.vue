<template>
	<div class="action-buttons__container">
		<Button
			size="small"
			severity="secondary"
			icon="pi pi-fw pi-trash"
			class="action-buttons__item"
		/>

		<Button
			size="small"
			severity="secondary"
			icon="pi pi-fw pi-pencil"
			class="action-buttons__item"
		/>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
	(e: 'onDeleteClick'): void;
	(e: 'onEditClick'): void;
}>();
</script>

<style lang="scss" scoped>
.action-buttons {
	&__container {
		display: flex;
		justify-content: flex-end;
		column-gap: 4px;
	}
}
</style>
