<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { getCharacters } from '$services/rick-morty/';

	import CharacterList from '$organisms/character-list/CharacterList.svelte';

	import type { Character, Info } from '$types/rickMorty';

	let characters: Character[] = [];
	let paginationInfo: Info;

	let element: HTMLElement;
	let threshold = 30;
	let loading = false;

	$: {
		if (element) element.parentElement!.addEventListener('scroll', infiniteScroll);
	}

	function infiniteScroll(event: any) {
		const targetElement = event.target as HTMLElement;

		const distanceToEndScroll =
			targetElement.scrollHeight - (targetElement.clientHeight + targetElement.scrollTop);

		if (distanceToEndScroll <= threshold) {
			if (!loading) fetchCharactersMore();
		}
	}

	async function fetchCharacters() {
		const { results, info } = (await getCharacters()).data;

		characters = results;
		paginationInfo = info;
	}

	async function fetchCharactersMore() {
		if (paginationInfo.next) {
			try {
				loading = true;

				const extractFilters = new URLSearchParams(new URL(paginationInfo.next).search);
				const nextPage = +extractFilters.get('page')!;

				const { results, info } = (await getCharacters({ page: nextPage })).data;

				characters = [...characters, ...results];
				paginationInfo = info;
			} finally {
				// @ Wait 3 seconds until all animation finish
				setTimeout(() => {
					loading = false;
				}, 3000);
			}
		}
	}

	onMount(() => {
		fetchCharacters();
	});

	onDestroy(() => {
		window.removeEventListener('scroll', infiniteScroll);
	});
</script>

<section class="character-container" bind:this={element}>
	<CharacterList {characters} />
</section>

<style lang="scss">
	.character-container {
		@apply flex justify-center flex-wrap;
		gap: 8px;
	}
</style>
