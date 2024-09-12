<template>
	<div class="auth__wrapper">
		<main>
			<slot />
		</main>
	</div>
</template>

<style lang="scss" scoped>
.auth__wrapper {
	background-color: rgb(221, 221, 221);
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	main {
		min-height: 200px;
		min-width: 200px;
		box-shadow: 4px 8px 22px rgba(0, 0, 0, 0.05);
		border-radius: 12px;
		overflow: hidden;
	}
}
</style>
