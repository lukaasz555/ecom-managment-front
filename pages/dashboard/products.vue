<template>
	<div>/products</div>
	<DataTable :value="products" :loading="loading">
		<template #loading>
			<!-- temporary -->
			<ProgressSpinner />
		</template>
		<template #header> header... </template>
		<Column
			v-for="column in productsTableColumns"
			:key="column.field"
			:field="column.field"
			:header="column.header"
			:style="column.style"
		>
			<template v-if="column.field === 'id'" #body>
				<ActionButtons />
			</template>
		</Column>
	</DataTable>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products.store';
import ActionButtons from '~/components/action-buttons.vue';
import { productsTableColumns } from '~/features/products/products-table-columns';

const productsStore = useProductsStore();
const { loading, products } = storeToRefs(productsStore);

onMounted(() => {
	productsStore.fetchProducts();
});
</script>

<style lang="scss">
.p-datatable-header-cell {
	.p-datatable-column-header-content {
		justify-content: center;
	}
	&:first-child {
		.p-datatable-column-header-content {
			justify-content: flex-start;
		}
	}
	&:first-child {
		text-align: left;
	}
	&:last-child {
		text-align: right;
	}
}
</style>
