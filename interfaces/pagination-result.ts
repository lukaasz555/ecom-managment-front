export interface IPaginationResult<T> {
	items: T[];
	meta: {
		totalRecords: number;
		totalPages: number;
		page: number;
		limit: number;
	};
}
