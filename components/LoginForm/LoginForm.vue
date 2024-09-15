<template>
	<div class="form__wrapper">
		<header>
			<h1>Login</h1>
		</header>
		<section>
			<Input v-model="loginForm.email" placeholder="E-mail" is-full-width />
			<Input
				v-model="loginForm.password"
				placeholder="Password"
				type="password"
				is-full-width
			/>
			<Button
				type="submit"
				buttonText="Login"
				:disabled="userStore.isLoading"
				is-full-width
				:loading="userStore.isLoading"
				@click="onSubmit"
			/>
		</section>
		<!-- <section>
			<div class="forgot-password">
				<Button
					buttonText="Forgot Password?"
					link
					:disabled="userStore.isLoading"
					size="small"
					style="padding: 5px 10px; font-size: 13px"
					@click="redirectToForgotPassword"
				/>
			</div>
		</section> -->
	</div>
</template>

<script setup lang="ts">
import Input from '../Input.vue';
import Button from '../Button.vue';
import { useUserStore } from '~/stores/user.store';

const loginForm = reactive({
	email: '',
	password: '',
});

const userStore = useUserStore();

// function redirectToForgotPassword() {
// 	const router = useRouter();
// 	router.push('/auth/forgot-password');
// }

async function onSubmit(): Promise<void> {
	await userStore.login(loginForm).then(() => {
		if (userStore.isLoggedIn) {
			const router = useRouter();
			router.push('/');
		}
	});
}
</script>

<style scoped lang="scss">
.form__wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	header {
		text-align: center;
		margin-bottom: 8px;
		h1 {
			color: rgb(63, 63, 63);
		}
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.forgot-password {
			display: flex;
			justify-content: flex-end;
		}
	}
}
</style>
