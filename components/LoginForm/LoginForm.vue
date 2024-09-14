<template>
	<div class="form__wrapper">
		<header>
			<h1>Login</h1>
		</header>
		<section class="">
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
				:disabled="false"
				is-full-width
			/>
		</section>
		<section>
			<div class="forgot-password">
				<Button
					buttonText="Forgot Password?"
					link
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
	email: '',
	password: '',
});

function redirectToForgotPassword() {
	const router = useRouter();
	router.push('/auth/forgot-password');
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
