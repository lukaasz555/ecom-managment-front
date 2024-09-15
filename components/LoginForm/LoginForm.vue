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
				:disabled="loading"
				is-full-width
				:loading="loading"
				@click="onSubmit"
			/>
		</section>
		<section>
			<div class="forgot-password">
				<Button
					buttonText="Forgot Password?"
					link
					:disabled="loading"
					size="small"
					style="padding: 5px 10px; font-size: 13px"
					@click="redirectToForgotPassword"
				/>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import Input from '../Input.vue';
import Button from '../Button.vue';

const loginForm = reactive({
	email: 'init',
	password: '',
});

const loading = ref(false);

function redirectToForgotPassword() {
	const router = useRouter();
	router.push('/auth/forgot-password');
}

async function onSubmit(): Promise<void> {
	loading.value = true;
	const { data, pending, error, refresh } = await useFetch(
		'http://localhost:4004/api/v1/management/auth/signin',
		{
			method: 'POST',
			body: {
				...loginForm,
			},
		}
	);
	loading.value = false;
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
