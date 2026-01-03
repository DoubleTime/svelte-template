<script lang="ts">
	import { browser } from '$app/environment';

	const themes = [
		// Light themes
		'light',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'retro',
		'cyberpunk',
		'valentine',
		'garden',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'cmyk',
		'autumn',
		'acid',
		'lemonade',
		'winter',
		'nord',
		// Dark themes
		'dark',
		'synthwave',
		'halloween',
		'forest',
		'aqua',
		'black',
		'luxury',
		'dracula',
		'business',
		'night',
		'coffee',
		'dim',
		'sunset'
	];

	let currentTheme = $state('light');
	let isOpen = $state(false);

	$effect(() => {
		if (browser) {
			const savedTheme = localStorage.getItem('theme') || 'light';
			currentTheme = savedTheme;
			document.documentElement.setAttribute('data-theme', savedTheme);
		}
	});

	function selectTheme(theme: string) {
		currentTheme = theme;
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
		isOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.theme-dropdown')) {
			isOpen = false;
		}
	}
</script>

<svelte:window on:click={handleClickOutside} />

<div class="theme-dropdown dropdown dropdown-end">
	<button
		class="btn btn-ghost btn-sm gap-2"
		onclick={(e) => {
			e.stopPropagation();
			isOpen = !isOpen;
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="1.5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
			/>
		</svg>
		<span class="hidden sm:inline capitalize">{currentTheme}</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	{#if isOpen}
		<div
			class="dropdown-content z-50 mt-2 p-2 shadow-lg bg-base-200 rounded-box w-56 max-h-80 overflow-y-auto"
		>
			<div class="grid grid-cols-1 gap-1">
				{#each themes as theme}
					<button
						class="btn btn-sm justify-start gap-2 {currentTheme === theme
							? 'btn-primary'
							: 'btn-ghost'}"
						onclick={() => selectTheme(theme)}
					>
						<div
							class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
							data-theme={theme}
						>
							<div class="size-1 rounded-full bg-primary"></div>
							<div class="size-1 rounded-full bg-secondary"></div>
							<div class="size-1 rounded-full bg-accent"></div>
							<div class="size-1 rounded-full bg-neutral"></div>
						</div>
						<span class="capitalize flex-1 text-left">{theme}</span>
						{#if currentTheme === theme}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
