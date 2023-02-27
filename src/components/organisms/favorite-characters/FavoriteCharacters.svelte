<script lang="ts">
	import CharacterList from '$organisms/character-list/CharacterList.svelte';

	import { characterFavorites } from '$stores/characterFavorites';
</script>

<section class="character-container">
	<CharacterList characters={$characterFavorites} />
</section>

<style lang="scss">
	.character-container {
		@apply flex justify-center flex-wrap;
		gap: 8px;
	}
</style>
