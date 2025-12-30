<script lang="ts">
	import { page } from '$app/state';

	type Props = {
		drawerOpen?: boolean;
		collapsed?: boolean;
	};

	let { drawerOpen = $bindable(false), collapsed = $bindable(false) }: Props = $props();

	// Track which submenus are expanded
	let expandedMenus = $state<Set<string>>(new Set());

	type MenuItem = {
		href?: string;
		label: string;
		icon: string;
		children?: { href: string; label: string }[];
	};

	const menuItems: MenuItem[] = [
		{
			href: '/admin',
			label: 'Dashboard',
			icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
		},
		{
			label: 'Users',
			icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
			children: [
				{ href: '/admin/users', label: 'All Users' },
				{ href: '/admin/users/roles', label: 'Roles' },
				{ href: '/admin/users/permissions', label: 'Permissions' }
			]
		},
		{
			label: 'Content',
			icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
			children: [
				{ href: '/admin/content/pages', label: 'Pages' },
				{ href: '/admin/content/posts', label: 'Blog Posts' },
				{ href: '/admin/content/media', label: 'Media Library' }
			]
		},
		{
			href: '/admin/settings',
			label: 'Settings',
			icon: 'M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.204-.107-.397.165-.71.505-.78.929l-.15.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894zM15 12a3 3 0 11-6 0 3 3 0 016 0z'
		}
	];

	function isActive(href: string | undefined): boolean {
		if (!href) return false;
		if (href === '/admin') {
			return page.url.pathname === '/admin';
		}
		return page.url.pathname.startsWith(href);
	}

	function isParentActive(item: MenuItem): boolean {
		if (item.children) {
			return item.children.some((child) => page.url.pathname.startsWith(child.href));
		}
		return false;
	}

	function toggleSubmenu(label: string) {
		if (expandedMenus.has(label)) {
			expandedMenus.delete(label);
		} else {
			expandedMenus.add(label);
		}
		expandedMenus = new Set(expandedMenus);
	}

	function handleNavClick() {
		drawerOpen = false;
	}

	// Auto-expand menus that have active children
	$effect(() => {
		menuItems.forEach((item) => {
			if (item.children && isParentActive(item)) {
				expandedMenus.add(item.label);
				expandedMenus = new Set(expandedMenus);
			}
		});
	});
</script>

<aside
	class="bg-base-100 border-r border-base-300 flex flex-col min-h-screen transition-all duration-300 {collapsed
		? 'w-16'
		: 'w-64'}"
>
	<!-- Header with logo and collapse button -->
	<div
		class="flex items-center justify-between p-4 border-b border-base-300 {collapsed
			? 'justify-center'
			: ''}"
	>
		{#if !collapsed}
			<a href="/admin" class="text-xl font-bold gradient-text">Admin Panel</a>
		{/if}
		<button
			class="btn btn-ghost btn-sm btn-square hidden lg:flex"
			onclick={() => (collapsed = !collapsed)}
			title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 transition-transform duration-300 {collapsed ? 'rotate-180' : ''}"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.5"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
		</button>
	</div>

	<!-- Navigation -->
	<nav class="flex-1 overflow-y-auto p-2">
		<ul class="menu w-full gap-1">
			{#each menuItems as item}
				<li>
					{#if item.children}
						<!-- Menu with submenu -->
						<button
							class="flex items-center gap-3 w-full justify-between {isParentActive(item)
								? 'bg-primary/10 text-primary'
								: ''}"
							onclick={() => toggleSubmenu(item.label)}
							title={collapsed ? item.label : ''}
						>
							<span class="flex items-center gap-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 shrink-0"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="1.5"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
								</svg>
								{#if !collapsed}
									<span>{item.label}</span>
								{/if}
							</span>
							{#if !collapsed}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 transition-transform duration-200 {expandedMenus.has(item.label)
										? 'rotate-180'
										: ''}"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
								</svg>
							{/if}
						</button>

						<!-- Submenu items -->
						{#if expandedMenus.has(item.label) && !collapsed}
							<ul class="ml-4 mt-1 border-l-2 border-base-300 pl-2">
								{#each item.children as child}
									<li>
										<a
											href={child.href}
											class="py-2 {isActive(child.href)
												? 'bg-primary text-primary-content font-medium'
												: 'hover:bg-base-200'}"
											onclick={handleNavClick}
										>
											{child.label}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					{:else}
						<!-- Direct link menu item -->
						<a
							href={item.href}
							class="flex items-center gap-3 {isActive(item.href)
								? 'bg-primary text-primary-content'
								: ''}"
							onclick={handleNavClick}
							title={collapsed ? item.label : ''}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 shrink-0"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
							</svg>
							{#if !collapsed}
								<span>{item.label}</span>
							{/if}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Bottom section -->
	<div class="border-t border-base-300 p-2">
		<ul class="menu w-full gap-1">
			<li>
				<a
					href="/"
					class="flex items-center gap-3 text-base-content/70 hover:text-base-content"
					title={collapsed ? 'View Site' : ''}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
					{#if !collapsed}
						<span>View Site</span>
					{/if}
				</a>
			</li>
			<li>
				<a
					href="/logout"
					class="flex items-center gap-3 text-error hover:bg-error/10"
					title={collapsed ? 'Logout' : ''}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
						/>
					</svg>
					{#if !collapsed}
						<span>Logout</span>
					{/if}
				</a>
			</li>
		</ul>
	</div>
</aside>
