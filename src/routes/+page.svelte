<script lang="ts">
	import AllCharacterList from '$components/organisms/all-characters/AllCharacters.svelte';
	import FavoriteCharactersList from '$organisms/favorite-characters/FavoriteCharacters.svelte';
	import Tabs from '$molecules/tabs/Tabs.svelte';

	import type { Tab, Active } from '$components/molecules/tabs/types';

	let tabs: Tab[] = [
		{ key: 'all', text: 'All' },
		{ key: 'fav', text: 'Favorites' }
	];

	let active = tabs[0].key;


	function setActive({ detail }: { detail: Active}) {
		active = detail
	}
</script>

<main class="home-page">
	<nav class="navbar-homepage">
		<Tabs {tabs} {active} on:active={setActive}/>
	</nav>


	{#if active === 'all'}
		<AllCharacterList />
	{:else}
		<FavoriteCharactersList />
	{/if}
</main>

<style lang="scss">
	.home-page {
		@apply flex flex-col items-center;
		@apply h-screen w-screen pb-10;
		@apply bg-neutral-low-dark;
		@apply overflow-x-hidden;

		&::before {
			content: '';
			pointer-events: none;
			position: fixed;
			display: inline-block;
			background-image: url('/rick-morty-portal.png');
			background-size: contain;
			height: 70vmin;
			width: 70vmin;
			background-repeat: no-repeat;

			animation: portal 12s linear infinite;
			filter: drop-shadow(0px 0px 30px #ec0000);
			left: calc(50% - 35vmin);
			top: calc(50% - 35vmin);
		}

		> .navbar-homepage {
			@apply flex items-center;
			@apply sticky top-0;
			@apply h-min w-full px-6 mb-20;
			@apply bg-neutral-high-pure;
			@apply z-6;
		}
	}

	@keyframes portal {
		from {
			transform: rotateZ(0deg);
		}
		to {
			transform: rotateZ(360deg);
			filter: drop-shadow(10px 14px 1px #ac0000);
		}
	}
</style>
