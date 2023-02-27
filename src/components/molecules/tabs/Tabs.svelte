<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { Tab, Active, Dispatchers } from './types';

	export let tabs: Tab[];
	export let active: Active;

	const dispatch = createEventDispatcher<Dispatchers>()
</script>

<ul class="tabs-list">
	{#each tabs as { text, key }}
		<li class="itemlist" data-active={active === key}>
			<button class="button-tab" on:click={() => dispatch('active', key)}>
				<slot :item="tab">
					{text}
				</slot>
			</button>
		</li>
	{/each}
</ul>

<style lang="scss">
	.tabs-list {
		@apply flex relative;

		> .itemlist {
			@apply relative mx-4;

			&::before {
				@apply absolute
          bottom-0 w-0 h-1
        bg-brand-primary-medium;

				content: '';
				transition: width 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
			}

			&[data-active='true']::before {
				width: 100%;
			}

			&[data-active='true'] > .button-tab {
				@apply font-bold;
			}
		}

		> .itemlist > .button-tab {
			@apply py-3 px-2
        bg-transparent border-none cursor-pointer;

			transition: color 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
		}
	}
</style>
