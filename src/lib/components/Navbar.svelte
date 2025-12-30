<script lang="ts">
	type Props = {
		showAuthLinks?: boolean;
		user?: { username: string } | null;
	};

	let { showAuthLinks = true, user = null }: Props = $props();
</script>

<div class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/#features">Features</a></li>
				<li><a href="/#about">About</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl font-bold">
			<span class="gradient-text">SvelteKit</span>
		</a>
	</div>

	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 gap-1">
			<li><a href="/" class="hover:bg-primary/10">Home</a></li>
			<li><a href="/#features" class="hover:bg-primary/10">Features</a></li>
			<li><a href="/#about" class="hover:bg-primary/10">About</a></li>
		</ul>
	</div>

	<div class="navbar-end gap-2">
		{#await import('$lib/components/ThemeToggle.svelte') then { default: ThemeToggle }}
			<ThemeToggle />
		{/await}

		{#if showAuthLinks}
			{#if user}
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar placeholder">
						<div class="bg-primary text-primary-content w-10 rounded-full">
							<span class="text-sm">{user.username.charAt(0).toUpperCase()}</span>
						</div>
					</div>
					<ul
						tabindex="0"
						class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="/admin">Dashboard</a></li>
						<li><a href="/admin/settings">Settings</a></li>
						<li class="border-t border-base-200 mt-1 pt-1">
							<a href="/logout" class="text-error">Logout</a>
						</li>
					</ul>
				</div>
			{:else}
				<a href="/login" class="btn btn-ghost btn-sm">Login</a>
				<a href="/login" class="btn btn-primary btn-sm">Get Started</a>
			{/if}
		{/if}
	</div>
</div>
