<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import Alert from '$lib/components/Alert.svelte';

	const users = [
		{
			id: 1,
			name: 'John Doe',
			email: 'john@example.com',
			role: 'Admin',
			status: 'Active',
			joined: '2024-01-15'
		},
		{
			id: 2,
			name: 'Jane Smith',
			email: 'jane@example.com',
			role: 'User',
			status: 'Active',
			joined: '2024-02-20'
		},
		{
			id: 3,
			name: 'Bob Johnson',
			email: 'bob@example.com',
			role: 'User',
			status: 'Inactive',
			joined: '2024-03-10'
		},
		{
			id: 4,
			name: 'Alice Brown',
			email: 'alice@example.com',
			role: 'User',
			status: 'Active',
			joined: '2024-04-05'
		},
		{
			id: 5,
			name: 'Charlie Wilson',
			email: 'charlie@example.com',
			role: 'Moderator',
			status: 'Active',
			joined: '2024-05-12'
		}
	];

	let searchQuery = $state('');
	let deleteModalOpen = $state(false);
	let selectedUser = $state<(typeof users)[0] | null>(null);
	let showSuccess = $state(false);

	const filteredUsers = $derived(
		users.filter(
			(user) =>
				user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				user.email.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	function openDeleteModal(user: (typeof users)[0]) {
		selectedUser = user;
		deleteModalOpen = true;
	}

	function confirmDelete() {
		// In a real app, you'd delete the user here
		deleteModalOpen = false;
		selectedUser = null;
		showSuccess = true;
		setTimeout(() => (showSuccess = false), 3000);
	}
</script>

<svelte:head>
	<title>Users | Admin</title>
</svelte:head>

<div class="space-y-6">
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
		<div>
			<h1 class="text-3xl font-bold">Users</h1>
			<p class="text-base-content/70">Manage your application users</p>
		</div>
		<button class="btn btn-primary">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
			</svg>
			Add User
		</button>
	</div>

	{#if showSuccess}
		<Alert variant="success" dismissible>User deleted successfully!</Alert>
	{/if}

	<!-- Search and Filter -->
	<div class="card bg-base-100 shadow-sm">
		<div class="card-body">
			<div class="flex flex-col sm:flex-row gap-4">
				<label class="input input-bordered flex items-center gap-2 flex-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 opacity-70"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<input type="text" class="grow" placeholder="Search users..." bind:value={searchQuery} />
				</label>
				<select class="select select-bordered w-full sm:w-auto">
					<option>All Roles</option>
					<option>Admin</option>
					<option>Moderator</option>
					<option>User</option>
				</select>
				<select class="select select-bordered w-full sm:w-auto">
					<option>All Status</option>
					<option>Active</option>
					<option>Inactive</option>
				</select>
			</div>
		</div>
	</div>

	<!-- Users Table -->
	<div class="card bg-base-100 shadow-sm overflow-hidden">
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<th>
							<label>
								<input type="checkbox" class="checkbox checkbox-sm" />
							</label>
						</th>
						<th>User</th>
						<th>Role</th>
						<th>Status</th>
						<th>Joined</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each filteredUsers as user (user.id)}
						<tr class="hover">
							<th>
								<label>
									<input type="checkbox" class="checkbox checkbox-sm" />
								</label>
							</th>
							<td>
								<div class="flex items-center gap-3">
									<div class="avatar placeholder">
										<div class="bg-primary/10 text-primary w-10 rounded-full">
											<span>{user.name.charAt(0)}</span>
										</div>
									</div>
									<div>
										<div class="font-medium">{user.name}</div>
										<div class="text-sm text-base-content/60">{user.email}</div>
									</div>
								</div>
							</td>
							<td>
								<span class="badge badge-ghost badge-sm">{user.role}</span>
							</td>
							<td>
								<span
									class="badge badge-sm"
									class:badge-success={user.status === 'Active'}
									class:badge-error={user.status === 'Inactive'}
								>
									{user.status}
								</span>
							</td>
							<td class="text-base-content/60">{user.joined}</td>
							<td>
								<div class="flex gap-1">
									<button class="btn btn-ghost btn-xs">Edit</button>
									<button
										class="btn btn-ghost btn-xs text-error"
										onclick={() => openDeleteModal(user)}>Delete</button
									>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="p-4 border-t border-base-200 flex items-center justify-between">
			<span class="text-sm text-base-content/60"
				>Showing {filteredUsers.length} of {users.length} users</span
			>
			<div class="join">
				<button class="join-item btn btn-sm">«</button>
				<button class="join-item btn btn-sm btn-active">1</button>
				<button class="join-item btn btn-sm">2</button>
				<button class="join-item btn btn-sm">3</button>
				<button class="join-item btn btn-sm">»</button>
			</div>
		</div>
	</div>
</div>

<!-- Delete Confirmation Modal -->
<Modal id="delete-modal" title="Confirm Delete" bind:open={deleteModalOpen}>
	<p>
		Are you sure you want to delete <strong>{selectedUser?.name}</strong>? This action cannot be
		undone.
	</p>
	{#snippet actions()}
		<button class="btn" onclick={() => (deleteModalOpen = false)}>Cancel</button>
		<button class="btn btn-error" onclick={confirmDelete}>Delete</button>
	{/snippet}
</Modal>
