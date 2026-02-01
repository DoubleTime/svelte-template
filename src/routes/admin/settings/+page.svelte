<script lang="ts">
	import Alert from '$lib/components/Alert.svelte';

	let { data } = $props();

	let profileForm = $state({
		username: data.user?.username || '',
		email: 'admin@example.com',
		bio: 'Full-stack developer passionate about building great products.'
	});

	let notificationSettings = $state({
		emailNotifications: true,
		pushNotifications: false,
		weeklyDigest: true
	});

	let showSaveSuccess = $state(false);

	function handleSave() {
		// In a real app, you'd save the settings here
		showSaveSuccess = true;
		setTimeout(() => (showSaveSuccess = false), 3000);
	}
</script>

<svelte:head>
	<title>Settings | Admin</title>
</svelte:head>

<div class="space-y-6 max-w-4xl">
	<div>
		<h1 class="text-3xl font-bold">Settings</h1>
		<p class="text-base-content/70">Manage your account and preferences</p>
	</div>

	{#if showSaveSuccess}
		<Alert variant="success" dismissible>Settings saved successfully!</Alert>
	{/if}

	<!-- Profile Settings -->
	<div class="card bg-base-100 shadow-sm">
		<div class="card-body">
			<h2 class="card-title">Profile</h2>
			<div class="divider mt-0"></div>

			<div class="flex flex-col md:flex-row gap-6">
				<div class="flex-shrink-0">
					<div class="avatar avatar-placeholder">
						<div class="bg-neutral text-neutral-content w-24 rounded-full">
							<span class="text-3xl">{profileForm.username.charAt(0).toUpperCase()}</span>
						</div>
					</div>
					<button class="btn btn-sm btn-outline mt-3 w-full">Change Avatar</button>
				</div>

				<div class="flex-1 space-y-4">
					<div class="form-control">
						<label class="label" for="username">
							<span class="label-text">Username</span>
						</label>
						<input
							id="username"
							type="text"
							class="input input-bordered"
							bind:value={profileForm.username}
						/>
					</div>

					<div class="form-control">
						<label class="label" for="email">
							<span class="label-text">Email</span>
						</label>
						<input
							id="email"
							type="email"
							class="input input-bordered"
							bind:value={profileForm.email}
						/>
					</div>

					<div class="form-control">
						<label class="label" for="bio">
							<span class="label-text">Bio</span>
						</label>
						<textarea id="bio" class="textarea textarea-bordered h-24" bind:value={profileForm.bio}
						></textarea>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Notification Settings -->
	<div class="card bg-base-100 shadow-sm">
		<div class="card-body">
			<h2 class="card-title">Notifications</h2>
			<div class="divider mt-0"></div>

			<div class="space-y-4">
				<div class="form-control">
					<label class="label cursor-pointer justify-start gap-4">
						<input
							type="checkbox"
							class="toggle toggle-primary"
							bind:checked={notificationSettings.emailNotifications}
						/>
						<div>
							<span class="label-text font-medium">Email Notifications</span>
							<p class="text-sm text-base-content/60">Receive notifications via email</p>
						</div>
					</label>
				</div>

				<div class="form-control">
					<label class="label cursor-pointer justify-start gap-4">
						<input
							type="checkbox"
							class="toggle toggle-primary"
							bind:checked={notificationSettings.pushNotifications}
						/>
						<div>
							<span class="label-text font-medium">Push Notifications</span>
							<p class="text-sm text-base-content/60">Receive push notifications in browser</p>
						</div>
					</label>
				</div>

				<div class="form-control">
					<label class="label cursor-pointer justify-start gap-4">
						<input
							type="checkbox"
							class="toggle toggle-primary"
							bind:checked={notificationSettings.weeklyDigest}
						/>
						<div>
							<span class="label-text font-medium">Weekly Digest</span>
							<p class="text-sm text-base-content/60">Receive a weekly summary email</p>
						</div>
					</label>
				</div>
			</div>
		</div>
	</div>

	<!-- Theme Settings -->
	<div class="card bg-base-100 shadow-sm">
		<div class="card-body">
			<h2 class="card-title">Appearance</h2>
			<div class="divider mt-0"></div>

			<div class="form-control">
				<label class="label" for="theme-select">
					<span class="label-text">Theme</span>
				</label>
				<select id="theme-select" class="select select-bordered w-full max-w-xs">
					<option value="light">Light</option>
					<option value="dark">Dark</option>
					<option value="system">System</option>
				</select>
				<div class="label">
					<span class="label-text-alt text-base-content/60">Choose your preferred color theme</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Danger Zone -->
	<div class="card bg-base-100 shadow-sm border border-error/20">
		<div class="card-body">
			<h2 class="card-title text-error">Danger Zone</h2>
			<div class="divider mt-0"></div>

			<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<p class="font-medium">Delete Account</p>
					<p class="text-sm text-base-content/60">Permanently delete your account and all data</p>
				</div>
				<button class="btn btn-error btn-outline">Delete Account</button>
			</div>
		</div>
	</div>

	<!-- Save Button -->
	<div class="flex justify-end gap-2">
		<button class="btn btn-ghost">Cancel</button>
		<button class="btn btn-primary" onclick={handleSave}>Save Changes</button>
	</div>
</div>
