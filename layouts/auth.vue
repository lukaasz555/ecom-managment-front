<template>
	<div class="auth__wrapper">
		<main>
			<!-- <slot /> -->
			<NuxtPage />
		</main>
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Open Sans', sans-serif;
}

*::before,
*::after {
	box-sizing: inherit;
}

.auth__wrapper {
	background: #ededed;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}
</style>
