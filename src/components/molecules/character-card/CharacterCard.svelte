<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Status from '$atoms/status/Status.svelte';

	import IconFavorite from '~icons/zmdi/favorite';

	import { fade, fly } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';

	import type { Props, Dispatchers } from './types';

	export let character: Props['character'];
	export let isFavorite: Props['isFavorite'];
	export let index: Props['index'];

	const dispatch = createEventDispatcher<Dispatchers>();
</script>

<aside
	class="card-character"
	in:fly={{ x: 800, duration: 200, delay: (index % 20) * 180 }}
	out:fade={{ duration: 200, easing: quadIn }}
>
	<img width="288" class="img" src={character?.image} alt="Rick morty" />

	<section class="content">
		<button class="fav-button" on:click|stopPropagation={() => dispatch('favorite', character)}>
			<IconFavorite
				style="font-size: 1.2rem; stroke: #ff0000; color: {isFavorite
					? '#ff0000'
					: 'transparent'}; stroke-width: 0.8rem; "
			/>
		</button>

		<Status status={character?.status ?? 'unknown'} />

		<dl class="group">
			<dt class="-definition" />
			<dd class="-description">
				{character?.name}
			</dd>

			<dt class="-definition">Species</dt>

			<dd class="-description">
				{character?.species}
			</dd>

			<dt class="-definition">Gender</dt>

			<dd class="-description">
				{character?.gender}
			</dd>
		</dl>
	</section>
</aside>

<style lang="scss">
	.card-character {
		@apply flex flex-col;
		@apply w-70 h-500px;
		@apply rounded-md bg-white;
		@apply overflow-hidden shadow-md cursor-pointer;

		will-change: transform;
		transition: transform 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

		@screen sm {
			@apply w-72 h-520px;

			&:hover {
				@apply z-2;
				transform: scale(1.2);
			}
		}

		> .img {
			@apply w-full;
		}

		> .content {
			@apply relative;
			@apply h-full p-4;
		}

		> .content {
			> .fav-button {
				@apply absolute right-4;
			}

			> .group {
				@apply flex flex-col items-start;
				@apply mb-2;
				@apply capitalize text-left;
			}
		}

		> .content > .group {
			> .-definition {
				@apply text-xs;
			}

			> .-description {
				@apply font-bold mb-4;
			}
		}
	}
</style>
