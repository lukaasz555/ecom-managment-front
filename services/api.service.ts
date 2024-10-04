import { useUserStore } from '~/stores/user.store';
import { Message, useGlobalStore } from '~/stores/global.store';

export class Filters {
	page = 1;
	limit = 10;
	offset = 0;
	totalRecords = 0;
	totalPages = 0;

	setPage(pageNumber: number) {
		this.page = pageNumber;
	}

	setLimit(limit: number) {
		this.limit = limit;
	}

	onNextPage() {
		if (this.page < this.totalPages) {
			this.page++;
		}
	}

	onPrevPage() {
		if (this.page > 1) {
			this.page--;
		}
	}
}

export class ApiService {
	async getData<T>(
		controller: string,
		method: string,
		filters?: Filters
	): Promise<T> {
		try {
			const response: T = await $fetch(
				`${this.#apiUrl}/${controller}/${method}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${this.#token}`,
					},
					params: {
						...filters,
					},
				}
			);
			return response;
		} catch (err) {
			console.log('getData error', err);

			const errorMessage = new Message('Something went wrong', 'Error');
			useGlobalStore().addMessage(errorMessage);

			throw new Error('apiService getData error');
		}
	}

	async deleteData<T = void>(
		controller: string,
		method: string,
		body?: Record<string, unknown>
	): Promise<T> {
		try {
			const response: T = await $fetch(
				`${this.#apiUrl}/${controller}/${method}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${this.#token}`,
					},
					body,
				}
			);
			return response;
		} catch (err) {
			console.log('deleteData error', err);
			const errorMessage = new Message('Something went wrong', 'Error');
			useGlobalStore().addMessage(errorMessage);
			throw new Error('apiService deleteData error');
		}
	}

	async updateData<T, R = T>(
		controller: string,
		method: string,
		body: T
	): Promise<R> {
		try {
			const response: R = await $fetch(
				`${this.#apiUrl}/${controller}/${method}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${this.#token}`,
					},
					body,
				}
			);
			return response;
		} catch (err) {
			console.log('updateData error', err);
			const errorMessage = new Message('Something went wrong', 'Error');
			useGlobalStore().addMessage(errorMessage);
			throw new Error('apiService updateData error');
		}
	}

	get #token() {
		return useUserStore().token;
	}

	get #apiUrl() {
		return useRuntimeConfig().public.apiUrl;
	}
}
