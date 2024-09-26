<template>
	<DataTable :value="products" :loading="loading">
		<Column
			v-for="column in productsTableColumns"
			:key="column.field"
			:field="column.field"
			:header="column.header"
			:style="column.style"
		>
			<template v-if="column.field === 'id'" #body="{ data }">
				<ActionButtons
					@onDeleteClick="deleteProduct(data.id)"
					@onEditClick="emit('editProduct', data.id)"
				/>
			</template>
		</Column>
	</DataTable>
	<Paginator
		v-model="filtersData.page"
		v-model:first="firstElement"
		:rows="filtersData.limit"
		:totalRecords="filtersData.totalRecords"
		:rowsPerPageOptions="[5, 10, 15, 20]"
		@page="handlePageChange($event.page + 1)"
		@update:rows="handleLimitChange($event)"
	/>
</template>

<script setup lang="ts">
import { productsTableColumns } from '../products-table-columns';
import { useProductsStore } from '~/stores/products.store';
import { useConfirm } from 'primevue/useconfirm';
import { ProductsFilters } from '../products.service';

const emit = defineEmits<{
	(e: 'deleteProduct', productId: number): void;
	(e: 'editProduct', productId: number): void;
}>();

const productsStore = useProductsStore();
const confirm = useConfirm();
const { loading, products } = storeToRefs(productsStore);

const filtersData = ref(new ProductsFilters());

function deleteProduct(productId: number) {
	confirm.require({
		header: 'Delete',
		message: 'Are you sure you want to delete this product?',
		acceptProps: {
			label: 'Delete',
			severity: 'danger',
		},
		accept: () => emit('deleteProduct', productId),
		rejectProps: {
			label: 'Cancel',
			outlined: true,
			severity: 'secondary',
		},
		reject: () => {},
	});
}

const { stopWatch, handlePageChange, handleLimitChange, firstElement } =
	usePagination(filtersData, productsStore.fetchProducts);

onUnmounted(() => {
	stopWatch();
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
