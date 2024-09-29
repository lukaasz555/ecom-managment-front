<template>
	<ProductsDataTable
		@deleteProduct="deleteProductHandler"
		@editProduct="editProductHandler"
	/>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products.store';
import ProductsDataTable from '~/features/products/components/products-data-table.vue';

const productsStore = useProductsStore();
const router = useRouter();

async function editProductHandler(productId: number): Promise<void> {
	router.push(`/dashboard/product/${productId}`);
}

async function deleteProductHandler(productId: number): Promise<void> {
	await productsStore.deleteProduct(productId);
}
</script>
