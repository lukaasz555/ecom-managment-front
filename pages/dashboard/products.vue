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
import type { Product } from '~/interfaces/product';
import { useProductsStore } from '~/stores/products.store';
import ActionButtons from '~/components/action-buttons.vue';
import type { TableColumn } from '~/interfaces/table-column';

const productsStore = useProductsStore();
productsStore.fetchProducts();

const { loading, products } = storeToRefs(productsStore);

const productsTableColumns: TableColumn<Product>[] = [
	{
		field: 'title',
		header: 'Title',
	},
	{
		field: 'price',
		header: 'Price',
		style: {
			'text-align': 'center',
		},
	},
	{
		field: 'categoryId',
		header: 'Category',
		style: {
			'text-align': 'center',
		},
	},
	{
		field: 'stock',
		header: 'Stock',
		style: {
			'text-align': 'center',
		},
	},
	{
		field: 'isAvailable',
		header: 'Available',
		style: {
			'text-align': 'center',
		},
	},
	{
		field: 'id',
		header: 'Actions',
		style: {
			width: '100%',
			display: 'flex',
			'align-items': 'center',
			'justify-content': 'flex-end',
		},
	},
];
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
