<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Admin Dashboard</title>
</svelte:head>

<!-- Responsive drawer with collapsible sidebar -->
<div class="drawer lg:drawer-open">
	<input id="admin-drawer" type="checkbox" class="drawer-toggle" />

	<div class="drawer-content flex flex-col min-h-screen">
		<!-- Navbar with drawer toggle -->
		<nav class="navbar w-full bg-base-100 shadow-sm">
			<!-- Drawer toggle button -->
			<label for="admin-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-linejoin="round"
					stroke-linecap="round"
					stroke-width="2"
					fill="none"
					stroke="currentColor"
					class="inline-block size-5"
				>
					<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
					></path>
					<path d="M9 4v16"></path>
					<path d="M14 10l2 2l-2 2"></path>
				</svg>
			</label>

			<!-- Mobile title -->
			<div class="flex-1 px-2 lg:hidden">
				<span class="text-xl font-bold gradient-text">Admin</span>
			</div>

			<!-- Breadcrumb - desktop only -->
			<div class="hidden lg:flex flex-1 px-4">
				<div class="text-sm breadcrumbs">
					<ul>
						<li><a href="/admin">Admin</a></li>
					</ul>
				</div>
			</div>

			<!-- Right side actions -->
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
						<li class="border-t border-base-200 mt-1 pt-1">
							<a href="/logout" class="text-error">Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<!-- Page content -->
		<main class="flex-1 p-6 bg-base-200/30">
			{@render children()}
		</main>
	</div>

	<!-- Drawer sidebar -->
	<div class="drawer-side is-drawer-close:overflow-visible z-40">
		<label for="admin-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<Sidebar />
	</div>
</div>
