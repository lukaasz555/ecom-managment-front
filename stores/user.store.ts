import type { UserPayload } from '~/interfaces/user-payload';
import { getUserPayloadFromToken } from '~/helpers';
import { LocalStorageEnum } from '~/enums';

interface UserStore {
	token: string | null;
	user: UserPayload | null;
	isLoading: boolean;
	isError: boolean;
}

type LoginData = {
	email: string;
	password: string;
};

const initState: () => UserStore = () => ({
	token: null,
	user: null,
	isLoading: false,
	isError: false,
});

export const useUserStore = defineStore('userStore', {
	state: initState,
	actions: {
		async login(loginData: LoginData): Promise<void> {
			this.isLoading = true;

			const { data, error } = await useFetch(
				'http://localhost:4004/api/v1/management/auth/signin',
				{
					method: 'POST',
					body: {
						...loginData,
					},
				}
			);
			if (error) this.isError = true;
			if (data.value && typeof data.value === 'string') {
				this.token = data.value;
				this.user = getUserPayloadFromToken(data.value);
				localStorage.setItem(LocalStorageEnum.APP_TOKEN, this.token);
				localStorage.setItem(
					LocalStorageEnum.APP_USER,
					JSON.stringify(this.user)
				);
				this.isError = false;
			}
			this.isLoading = false;
		},
		async getUserFromLocalStorage(): Promise<void> {
			this.isLoading = true;
			const token = localStorage.getItem(LocalStorageEnum.APP_TOKEN);
			const user = localStorage.getItem(LocalStorageEnum.APP_USER);
			if (token && user) {
				this.token = token;
				this.user = JSON.parse(user);
				this.isError = false;
			}
			this.isLoading = false;
		},
		logout(): void {
			this.$reset();
			localStorage.removeItem(LocalStorageEnum.APP_TOKEN);
			localStorage.removeItem(LocalStorageEnum.APP_USER);
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.token && !!state.user,
	},
});
