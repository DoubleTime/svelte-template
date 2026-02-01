<script lang="ts">
	const stats = [
		{
			label: 'Total Users',
			value: '2,450',
			change: '+12%',
			icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
		},
		{
			label: 'Revenue',
			value: '$45,231',
			change: '+23%',
			icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
		},
		{
			label: 'Orders',
			value: '1,234',
			change: '+8%',
			icon: 'M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
		},
		{
			label: 'Active Sessions',
			value: '342',
			change: '+5%',
			icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
		}
	];

	const recentActivity = [
		{
			action: 'New user registered',
			user: 'john@example.com',
			time: '2 minutes ago',
			type: 'user'
		},
		{
			action: 'Order #1234 completed',
			user: 'jane@example.com',
			time: '15 minutes ago',
			type: 'order'
		},
		{ action: 'Settings updated', user: 'admin', time: '1 hour ago', type: 'settings' },
		{ action: 'New user registered', user: 'bob@example.com', time: '2 hours ago', type: 'user' },
		{
			action: 'Order #1233 completed',
			user: 'alice@example.com',
			time: '3 hours ago',
			type: 'order'
		}
	];
</script>

<svelte:head>
	<title>Dashboard | Admin</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h1 class="text-3xl font-bold">Dashboard</h1>
		<p class="text-base-content/70">Welcome back! Here's what's happening.</p>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
		{#each stats as stat (stat.label)}
			<div class="stat bg-base-100 rounded-box shadow-sm">
				<div class="stat-figure text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d={stat.icon} />
					</svg>
				</div>
				<div class="stat-title">{stat.label}</div>
				<div class="stat-value text-primary">{stat.value}</div>
				<div class="stat-desc text-success">{stat.change} from last month</div>
			</div>
		{/each}
	</div>

	<!-- Charts placeholder and Recent Activity -->
	<div class="grid lg:grid-cols-2 gap-6">
		<!-- Chart Placeholder -->
		<div class="card bg-base-100 shadow-sm">
			<div class="card-body">
				<h2 class="card-title">Revenue Overview</h2>
				<div class="h-64 flex items-center justify-center bg-base-200 rounded-lg">
					<div class="text-center text-base-content/50">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-16 w-16 mx-auto mb-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1"
								d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
							/>
						</svg>
						<p>Chart placeholder</p>
						<p class="text-sm">Integrate your preferred chart library</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Recent Activity -->
		<div class="card bg-base-100 shadow-sm">
			<div class="card-body">
				<h2 class="card-title">Recent Activity</h2>
				<div class="overflow-x-auto">
					<table class="table table-sm">
						<tbody>
							{#each recentActivity as activity (activity.action + activity.user)}
								<tr>
									<td>
										<div class="flex items-center gap-3">
											<div class="avatar avatar-placeholder">
												<div class="bg-neutral text-neutral-content w-10 rounded-full">
													{#if activity.type === 'user'}
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
																d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
															/>
														</svg>
													{:else if activity.type === 'order'}
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
																d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
															/>
														</svg>
													{:else}
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
																d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
															/>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
															/>
														</svg>
													{/if}
												</div>
											</div>
											<div>
												<div class="font-medium">{activity.action}</div>
												<div class="text-sm text-base-content/60">{activity.user}</div>
											</div>
										</div>
									</td>
									<td class="text-right text-sm text-base-content/60">{activity.time}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!-- Quick Actions -->
	<div class="card bg-base-100 shadow-sm">
		<div class="card-body">
			<h2 class="card-title">Quick Actions</h2>
			<div class="flex flex-wrap gap-2">
				<a href="/admin/users" class="btn btn-primary btn-sm">
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
							d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
					Manage Users
				</a>
				<a href="/admin/settings" class="btn btn-secondary btn-sm">
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
							d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					Settings
				</a>
				<a href="/" class="btn btn-outline btn-sm">
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
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
					View Site
				</a>
			</div>
		</div>
	</div>
</div>
