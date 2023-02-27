<script lang="ts">
	import { storeCharacterFavorite, favoritesIDs } from '$stores/characterFavorites';

	import CharacterCard from '../../molecules/character-card/CharacterCard.svelte';
	import type { Character } from '$types/rickMorty';

	export let characters: Character[] = [];

	function setCharacterFavorite({ detail }: { detail: Character }) {
		storeCharacterFavorite(detail);
	}
</script>

{#each characters as character, index (character.id)}
	<CharacterCard
		{index}
		{character}
		isFavorite={$favoritesIDs.includes(character.id)}
		on:favorite={setCharacterFavorite}
	/>
{/each}
