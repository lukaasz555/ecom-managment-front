import type { WatchStopHandle } from 'vue';
import type { Filters } from '~/services/api.service';

const setInitDataFromQuery = <T extends Filters>(filtersData: Ref<T>) => {
	const route = useRoute();
	const page = route.query.page;
	const limit = route.query.limit;

	// ? replace with for of?
	if (page && !isNaN(Number(page))) {
		filtersData.value.page = Number(page);
	}
	if (limit && !isNaN(Number(limit))) {
		filtersData.value.limit = Number(limit);
	}
};

// * Filters -> PaginationData?
export const usePagination = <T extends Filters>(
	data: Ref<T>,
	handler: (value: T) => Promise<void>
) => {
	setInitDataFromQuery(data);
	let stopWatch: WatchStopHandle = () => {};

	const handlePageChange = (page: number) => {
		data.value.setPage(page);
	};
	const handleLimitChange = (limit: number) => {
		data.value.setLimit(limit);
	};
	const handleNextPage = () => data.value.onNextPage();
	const handlePrevPage = () => data.value.onPrevPage();

	const firstElement = computed(() => (data.value.page - 1) * data.value.limit);

	stopWatch = watch(
		() => data.value,
		() => {
			const router = useRouter();

			router.push({
				query: {
					page: data.value.page,
					limit: data.value.limit,
				},
			});
			handler(data.value);
		},
		{ deep: true, immediate: true }
	);

	return {
		stopWatch,
		handlePageChange,
		handleLimitChange,
		handleNextPage,
		handlePrevPage,
		firstElement,
	};
};
