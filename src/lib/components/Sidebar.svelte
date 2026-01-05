<script lang="ts">
	import { page } from '$app/state';

	// Track which submenus are expanded (for drawer open state)
	let expandedMenus = $state<Set<string>>(new Set());
	// Track which flyout menu is open (for drawer closed state)
	let openFlyout = $state<string | null>(null);

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
			icon: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
		},
		{
			label: 'Users',
			icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
			children: [
				{ href: '/admin/users', label: 'All Users' },
				{ href: '/admin/users/roles', label: 'Roles' },
				{ href: '/admin/users/permissions', label: 'Permissions' }
			]
		},
		{
			label: 'Content',
			icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
			children: [
				{ href: '/admin/content/pages', label: 'Pages' },
				{ href: '/admin/content/posts', label: 'Blog Posts' },
				{ href: '/admin/content/media', label: 'Media Library' }
			]
		},
		{
			href: '/admin/settings',
			label: 'Settings',
			icon: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
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

	function toggleSubmenu(label: string, e: Event) {
		e.preventDefault();
		if (expandedMenus.has(label)) {
			expandedMenus.delete(label);
		} else {
			expandedMenus.add(label);
		}
		expandedMenus = new Set(expandedMenus);
	}

	function toggleFlyout(label: string, e: Event) {
		e.stopPropagation();
		if (openFlyout === label) {
			openFlyout = null;
		} else {
			openFlyout = label;
		}
	}

	function closeFlyout() {
		openFlyout = null;
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

<!-- Click outside to close flyout -->
<svelte:window onclick={closeFlyout} />

<!-- Sidebar container with responsive width -->
<div
	class="flex min-h-full flex-col bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 transition-all duration-200"
>
	<!-- Header -->
	<div class="flex items-center justify-center is-drawer-open:justify-start h-16 w-full px-3">
		<a href="/admin" class="flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-6 text-primary shrink-0"
			>
				<path
					d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
				/>
				<circle cx="12" cy="12" r="3" />
			</svg>
			<span class="is-drawer-close:hidden text-lg font-bold gradient-text whitespace-nowrap"
				>Admin Panel</span
			>
		</a>
	</div>

	<!-- Navigation Menu -->
	<ul class="menu w-full grow is-drawer-close:px-1">
		{#each menuItems as item}
			<li>
				{#if item.children}
					<!-- Expanded view (drawer open) - use details/summary -->
					<details class="is-drawer-close:hidden" open={expandedMenus.has(item.label)}>
						<summary
							class={isParentActive(item) ? 'text-primary font-medium' : ''}
							onclick={(e) => toggleSubmenu(item.label, e)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="size-4"
							>
								<path d={item.icon} />
							</svg>
							{item.label}
						</summary>
						<ul>
							{#each item.children as child}
								<li>
									<a href={child.href} class={isActive(child.href) ? 'menu-active' : ''}>
										{child.label}
									</a>
								</li>
							{/each}
						</ul>
					</details>

					<!-- Collapsed view (drawer closed) - clickable button with flyout -->
					<button
						class="hidden is-drawer-close:flex w-full justify-center relative {isParentActive(item)
							? 'text-primary'
							: ''}"
						onclick={(e) => toggleFlyout(item.label, e)}
						title={item.label}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="size-4"
						>
							<path d={item.icon} />
						</svg>
						<!-- Flyout menu -->
						{#if openFlyout === item.label}
							<ul
								class="menu bg-base-100 rounded-box w-52 p-2 shadow-lg absolute left-full top-0 ml-2 z-50"
								onclick={(e) => e.stopPropagation()}
							>
								<li class="menu-title">{item.label}</li>
								{#each item.children as child}
									<li>
										<a
											href={child.href}
											class={isActive(child.href) ? 'menu-active' : ''}
											onclick={closeFlyout}
										>
											{child.label}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</button>
				{:else}
					<!-- Direct link - show/hide based on drawer state -->
					<a
						href={item.href}
						class="is-drawer-close:justify-center {isActive(item.href) ? 'menu-active' : ''}"
						title={item.label}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="size-4"
						>
							<path d={item.icon} />
						</svg>
						<span class="is-drawer-close:hidden">{item.label}</span>
					</a>
				{/if}
			</li>
		{/each}
	</ul>

	<!-- Divider -->
	<div class="divider my-0 px-2 is-drawer-close:hidden"></div>

	<!-- Bottom Menu -->
	<ul class="menu w-full pb-4 is-drawer-close:px-1">
		<li>
			<a href="/" class="is-drawer-close:justify-center" title="View Site">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="size-4"
				>
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
					<polyline points="15,3 21,3 21,9" />
					<line x1="10" y1="14" x2="21" y2="3" />
				</svg>
				<span class="is-drawer-close:hidden">View Site</span>
			</a>
		</li>
		<li>
			<a href="/logout" class="text-error is-drawer-close:justify-center" title="Logout">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="size-4"
				>
					<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
					<polyline points="16,17 21,12 16,7" />
					<line x1="21" y1="12" x2="9" y2="12" />
				</svg>
				<span class="is-drawer-close:hidden">Logout</span>
			</a>
		</li>
	</ul>
</div>
