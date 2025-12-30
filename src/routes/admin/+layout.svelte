<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children, data } = $props();
	let drawerOpen = $state(false);
	let sidebarCollapsed = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Admin Dashboard</title>
</svelte:head>

<div class="drawer lg:drawer-open">
	<input id="admin-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />

	<div class="drawer-content flex flex-col min-h-screen">
		<!-- Top navbar for mobile -->
		<div class="navbar bg-base-100 shadow-sm lg:hidden">
			<div class="flex-none">
				<label for="admin-drawer" class="btn btn-square btn-ghost drawer-button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-5 h-5 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
			</div>
			<div class="flex-1">
				<span class="text-xl font-bold gradient-text">Admin</span>
			</div>
			<div class="flex-none gap-2">
				<ThemeToggle />
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar placeholder">
						<div class="bg-primary text-primary-content w-10 rounded-full">
							<span class="text-sm">{data.user?.username?.charAt(0).toUpperCase() || 'A'}</span>
						</div>
					</div>
					<ul
						tabindex="0"
						class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="/admin/settings">Settings</a></li>
						<li><a href="/logout" class="text-error">Logout</a></li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Page content -->
		<main class="flex-1 p-6 bg-base-200/30">
			<!-- Breadcrumb -->
			<div class="hidden lg:flex items-center justify-between mb-6">
				<div class="text-sm breadcrumbs">
					<ul>
						<li><a href="/admin">Admin</a></li>
					</ul>
				</div>
				<div class="flex items-center gap-3">
					<ThemeToggle />
					<div class="dropdown dropdown-end">
						<div tabindex="0" role="button" class="btn btn-ghost gap-2">
							<div class="avatar placeholder">
								<div class="bg-primary text-primary-content w-8 rounded-full">
									<span class="text-xs">{data.user?.username?.charAt(0).toUpperCase() || 'A'}</span>
								</div>
							</div>
							<span>{data.user?.username || 'Admin'}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
						<ul
							tabindex="0"
							class="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li><a href="/admin/settings">Settings</a></li>
							<li class="border-t border-base-200 mt-1 pt-1">
								<a href="/logout" class="text-error">Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{@render children()}
		</main>
	</div>

	<div class="drawer-side z-40">
		<label
			for="admin-drawer"
			aria-label="close sidebar"
			class="drawer-overlay"
			onclick={() => (drawerOpen = false)}
		></label>
		<Sidebar bind:drawerOpen bind:collapsed={sidebarCollapsed} />
	</div>
</div>
