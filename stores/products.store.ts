import { defineStore } from 'pinia';
import type { Product } from '~/interfaces/product';
import { useUserStore } from './user.store';
import type { IPaginationResult } from '~/interfaces/pagination-result';
import { ProductsService } from '~/features/products/products.service';

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
		async fetchProducts(): Promise<void> {
			this.loading = true;
			// const mockData = Array.from({ length: 25 }, (_, index) => {
			// 	const product: Product = {
			// 		id: index + 1,
			// 		title: `Product ${index + 1}`,
			// 		isAvailable: Math.random() > 0.5,
			// 		price: parseFloat((Math.random() * 100).toFixed(2)),
			// 		stock: Math.floor(Math.random() * 100),
			// 		categoryId: Math.floor(Math.random() * 7) + 1,
			// 	};
			// 	return product;
			// });

			// const { data, error }: { data: Product[]; error: boolean } =
			// 	await new Promise((resolve) => {
			// 		setTimeout(() => {
			// 			resolve({ data: mockData, error: false });
			// 		}, 777);
			// 	});

			try {
				// const token = useUserStore().token;
				// const apiUrl = useRuntimeConfig().public.apiUrl;

				// const apiResponse: IPaginationResult<Product> = await $fetch(
				// 	`${apiUrl}/management/products`,
				// 	{
				// 		method: 'GET',
				// 		headers: {
				// 			'Content-Type': 'application/json',
				// 			Authorization: `Bearer ${token ?? ''}`,
				// 		},
				// 	}
				// );
				// this.products = apiResponse.items;

				// const productsService = new ProductsService();
				// productsService.getProducts();
				const apiResponse = await ProductsService.getProducts();
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
