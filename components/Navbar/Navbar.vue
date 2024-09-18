<template>
	<Menubar :model="navigationItems">
		<template #item="{ item, props }">
			<a
				v-ripple
				class="flex items-center"
				v-bind="props.action"
				@click="navigate(item)"
			>
				<span :class="item.icon" />
				<span class="ml-2">{{ item.label }}</span>
			</a>
		</template>
	</Menubar>
</template>

<script lang="ts" setup>
import { navigationItems } from '~/utils/navigation-items';

function navigate(item: (typeof navigationItems)[0]) {
	const router = useRouter();
	router.push(item.to);
}
</script>

<style></style>
