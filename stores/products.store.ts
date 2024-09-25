import { defineStore } from 'pinia';
import type { Product } from '~/interfaces/product';
import { useUserStore } from './user.store';
import type { IPaginationResult } from '~/interfaces/pagination-result';
import { ProductsService } from '~/features/products/products.service';
import type { Filters } from '~/services/api.service';

interface ProductsStore {
	product: Product | null;
	products: Product[];
	loading: boolean;
	isError: boolean;
}

const initState: () => ProductsStore = () => ({
	product: null,
	products: [],
	loading: false,
	isError: false,
});

export const useProductsStore = defineStore({
	id: 'productsStore',
	state: initState,
	actions: {
		async fetchProducts<T extends Filters>(filtersData: T): Promise<void> {
			this.loading = true;

			try {
				const apiResponse = await ProductsService.getProducts(filtersData);
				filtersData.totalRecords = apiResponse.meta.totalRecords;
				this.products = apiResponse.items;
			} catch (err) {
				this.isError = true;
			} finally {
				this.loading = false;
			}
		},
		async deleteProduct(productId: number): Promise<void> {
			try {
				const token = useUserStore().token;
				await $fetch(
					`http://localhost:4004/api/v1/management/products/${productId}`,
					{
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token ?? ''}`,
						},
					}
				);

				this.products = this.products.filter(
					(product) => product.id !== productId
				);
			} catch (err) {
				this.isError = true;
			}
		},
	},
});
