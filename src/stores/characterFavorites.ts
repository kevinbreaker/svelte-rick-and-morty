import { writable, derived } from 'svelte/store';
import type { Character } from '$types/rickMorty';

export interface CharacterFavorites extends Character {
	description?: string;
}

export const characterFavorites = writable<CharacterFavorites[]>([]);

export const favoritesIDs = derived(characterFavorites, ($character) =>
	$character.map((character) => character.id)
);

export function storeCharacterFavorite(character: CharacterFavorites) {
	if (!character.id) return;

	characterFavorites.update((characters) => {
		const characterStoredIndex = characters.findIndex((item) => item.id === character.id);

		return characterStoredIndex !== -1
			? characters.filter((_, index) => index !== characterStoredIndex)
			: [...characters, character];
	});
}
