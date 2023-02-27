<script lang="ts">
	import type { Status } from '$types/rickMorty';

	export let status: Status;
</script>

<div class="status-core -{status.toLocaleLowerCase()}">{status}</div>

<style lang="scss">
	.status-core {
		@apply h-min w-min;
		@apply px-3 py-1 mb-2;
		@apply rounded-xl;
		@apply text-xs;

		&.-alive {
			@apply bg-feedback-positive-pure;
			@apply text-neutral-high-pure;
		}

		&.-dead {
			@apply bg-feedback-negative-pure;
			@apply text-neutral-high-pure;
		}

		&.-unknown {
			@apply bg-neutral-high-dark;
		}
	}
</style>
