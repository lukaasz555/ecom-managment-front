import type { IPaginationResult } from '~/interfaces/pagination-result';
import type { Product } from '~/interfaces/product';
import { ApiService, Filters } from '~/services/api.service';

class ProductsFilters extends Filters {
	categories: number[] = [];
	search = '';
}

export class ProductsService extends ApiService {
	static async getProducts() {
		const testFilters = new ProductsFilters();
		testFilters.page = 1;
		testFilters.limit = 6;
		testFilters.categories = [4];
		testFilters.search = 'qwe';

		const apiService = new ApiService();
		return apiService.getData<IPaginationResult<Product>>(
			'management',
			'products',
			testFilters
		);
	}
}
