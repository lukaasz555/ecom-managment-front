import type { PageState } from 'primevue/paginator';
import type { Filters } from '~/services/api.service';

const getDataFromQuery = <T extends Filters>(filtersData: Ref<T>) => {
	const route = useRoute();
	const page = route.query.page;
	const limit = route.query.limit;

	if (page && !isNaN(Number(page))) {
		filtersData.value.page = Number(page);
	}
	if (limit && !isNaN(Number(limit))) {
		filtersData.value.limit = Number(limit);
	}
	filtersData.value.offset =
		(filtersData.value.page - 1) * filtersData.value.limit;
};

function onPageStateLimitChange<T extends Filters>(
	newPageState: PageState,
	oldPageState: PageState
) {
	if (newPageState.rows === oldPageState.rows) return;

	newPageState.page = oldPageState.page;
	newPageState.first = (newPageState.page - 1) * newPageState.rows;
}

export const usePagination = <T extends Filters>(
	data: Ref<T>,
	handler: (value: T) => Promise<void>
) => {
	const route = useRoute();
	const router = useRouter();
	const prevState = ref<PageState | null>(null);

	function onPageChange(newPageState: PageState): void {
		if (prevState.value) {
			onPageStateLimitChange(newPageState, prevState.value);
		}

		router.push({
			query: {
				...route.query,
				page: String(newPageState.page + 1),
				limit: String(newPageState.rows),
			},
		});
		prevState.value = newPageState;
	}

	watch(
		() => route.query,
		async () => {
			getDataFromQuery(data);
			await handler(data.value);
		},
		{ deep: true, immediate: true }
	);

	return {
		onPageChange,
	};
};
