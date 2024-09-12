<template>
	<div class="form__wrapper">
		<h1 class="text-3xl font-bold underline">Hello world!</h1>
		<UForm
			:schema="loginFormSchema"
			:state="loginForm"
			class="space-y-4"
			@submit="onSubmit"
		>
			<UFormGroup label="Email" name="email">
				<UInput
					v-model="loginForm.email"
					color="white"
					input-class="border-2 border-gray"
					variant="outline"
					label="E-mail:"
					size="lg"
					:ui="{
						strategy: 'override',
						color: 'jade-950',
						text: 'text-[#FAB]',
						rounded: 'rounded-lg',
					}"
				/>
			</UFormGroup>

			<UFormGroup label="Password" name="password">
				<UInput
					v-model="loginForm.password"
					type="password"
					size="lg"
					placeholder="Password"
				/>
			</UFormGroup>

			<p class="text-primary">should be pink/visible</p>
			<UButton
				block
				size="lg"
				variant="solid"
				type="submit"
				:ui="{
					rounded: 'rounded-lg',
					color: 'primary',
				}"
			>
				Submit
			</UButton>
			<UButton
				:loading="false"
				color="jade"
				label="Button Label"
				class="rounded-lg"
				:ui="{
					strategy: 'override',
					base: 'focus:outline-dashed',
					rounded: 'rounded-full',
					color: {
						white: {
							solid: {
								base: 'bg-[#FAB]',
								hover: 'hover:bg-[#FAB]',
								active: 'active:bg-[#FAB]',
							},
						},
					},
				}"
			/>
		</UForm>
	</div>
</template>

<script setup lang="ts">
import { z } from 'zod';

const loginForm = reactive({
	email: '',
	password: '',
});

const loginFormSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z
		.string()
		.min(8, 'At least 8 characters')
		.max(64, 'At most 64 characters'),
});

function onSubmit() {
	const formValues = { email: loginForm.email, password: loginForm.password };
	const validationResult = loginFormSchema.safeParse(formValues);

	if (!validationResult.success) {
		console.error(validationResult.error);
		return;
	}

	console.log('Form submitted:', formValues);
}
</script>
<style lang="scss" scoped>
.form__wrapper {
	padding: 20px;
}
</style>
