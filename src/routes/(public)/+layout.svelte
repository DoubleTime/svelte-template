<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<title>SvelteKit Boilerplate</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navbar user={data.user} />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
