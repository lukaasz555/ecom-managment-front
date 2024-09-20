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
		<template #end>
			<SplitButton
				:model="userMenuItems"
				severity="secondary"
				text
				:label="userStore.nameAndSurname"
			>
				<template #dropdownicon>
					<Avatar
						image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9297ea1-e95c-4b1e-9604-1427123286bf/dchixe8-3355c469-6b4e-4b84-991b-3814cdcb8115.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y5Mjk3ZWExLWU5NWMtNGIxZS05NjA0LTE0MjcxMjMyODZiZlwvZGNoaXhlOC0zMzU1YzQ2OS02YjRlLTRiODQtOTkxYi0zODE0Y2RjYjgxMTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JFs1CXk_t5H3-Ahterflt7O-BEM285mRIOY4LeYxWi4"
						class="mr-2"
						size="normal"
						shape="circle"
					/>
				</template>
			</SplitButton>
		</template>
	</Menubar>
</template>

<script lang="ts" setup>
import { navigationItems } from '~/utils/navigation-items';
import { useUserStore } from '~/stores/user.store';
import type { MenuItem } from 'primevue/menuitem';

const userStore = useUserStore();

const userMenuItems: MenuItem[] = [
	{
		label: 'Profile',
		icon: 'pi pi-user',
		to: '/profile',
	},
	{
		label: 'Logout',
		icon: 'pi pi-sign-out',
		command: () => userStore.logout(),
	},
];

function navigate(menuItem: MenuItem) {
	const router = useRouter();
	router.push(menuItem.to);
}
</script>

<style scoped lang="scss">
.user--container {
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	column-gap: 10px;
}

button.p-button-text.p-splitbutton-button {
	display: none !important;
}
</style>
