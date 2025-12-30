<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id: string;
		title?: string;
		open?: boolean;
		children?: Snippet;
		actions?: Snippet;
		onclose?: () => void;
	};

	let { id, title = '', open = $bindable(false), children, actions, onclose }: Props = $props();

	function handleClose() {
		open = false;
		onclose?.();
	}
</script>

<dialog {id} class="modal" class:modal-open={open}>
	<div class="modal-box">
		{#if title}
			<h3 class="font-bold text-lg">{title}</h3>
		{/if}

		<button
			class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
			onclick={handleClose}
			aria-label="Close modal"
		>
			✕
		</button>

		<div class="py-4">
			{#if children}
				{@render children()}
			{/if}
		</div>

		{#if actions}
			<div class="modal-action">
				{@render actions()}
			</div>
		{/if}
	</div>
	<form method="dialog" class="modal-backdrop">
		<button onclick={handleClose}>close</button>
	</form>
</dialog>
