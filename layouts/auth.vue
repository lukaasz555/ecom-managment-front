<template>
	<div class="auth__wrapper">
		<main>
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

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 600;
	font-family: 'Montserrat', sans-serif;
}

.auth__wrapper {
	background: #ededed;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	main {
		background: #f7f7f7;
		padding: 40px;
		box-shadow: 4px 8px 22px rgba(0, 0, 0, 0.1);
		border-radius: var(--p-border-radius-lg);
	}
}
</style>
