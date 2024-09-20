<template>
	<div class="dashboard__wrapper">
		<div class="card flex justify-space-between" style="height: 100%">
			<Navbar />
			<main>
				<NuxtPage />
			</main>
		</div>
		<Footer />
	</div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar/Navbar.vue';
import Footer from '~/components/Footer/Footer.vue';
import 'primeicons/primeicons.css';
</script>

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

.dashboard__wrapper {
	background: #ededed;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;

	main {
		flex-grow: 1;
		min-height: 100%;
		padding: 0.75rem 0.5rem;
	}
}
</style>
