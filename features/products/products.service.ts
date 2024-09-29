import type { IPaginationResult } from '~/interfaces/pagination-result';
import type { Product } from '~/interfaces/product';
import { ApiService, Filters } from '~/services/api.service';

export class ProductsFilters extends Filters {
	categories: number[] = [];
	// categories = '';
	// search = '';
}

export class ProductsService extends ApiService {
	static async getProducts<T extends Filters>(filters: T) {
		const apiService = new ApiService();
		const apiRes = await apiService.getData<IPaginationResult<Product>>(
			'management',
			'products',
			filters
		);

		return apiRes;
	}

	static async getProduct(productId: number) {
		const apiService = new ApiService();
		const apiRes = await apiService.getData<Product>(
			'management',
			`products/${productId}`
		);
		return apiRes;
	}
}
