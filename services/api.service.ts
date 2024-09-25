import { useUserStore } from '~/stores/user.store';
import { Message, useGlobalStore } from '~/stores/global.store';

export class Filters {
	page = 1;
	limit = 10;
	totalRecords = 0;
}

export class ApiService {
	baseUrl = 'http://localhost:4004/api/v1'; // todo: move to env

	async getData<T>(
		controller: string,
		method: string,
		filters?: Filters
	): Promise<T> {
		try {
			const apiUrl = useRuntimeConfig().public.apiUrl;
			const response: T = await $fetch(
				`${this.baseUrl}/${controller}/${method}`,
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

	get #token() {
		return useUserStore().token;
	}
}
