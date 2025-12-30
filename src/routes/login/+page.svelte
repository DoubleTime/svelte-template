<script lang="ts">
	import { enhance } from '$app/forms';
	import Alert from '$lib/components/Alert.svelte';

	let { form } = $props();
	let loading = $state(false);
</script>

<svelte:head>
	<title>Login | SvelteKit Boilerplate</title>
</svelte:head>

<div
	class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 p-4"
>
	<div class="card w-full max-w-md bg-base-100 shadow-xl">
		<div class="card-body">
			<div class="text-center mb-6">
				<h1 class="text-3xl font-bold gradient-text">Welcome Back</h1>
				<p class="text-base-content/70 mt-2">Sign in to your account</p>
			</div>

			{#if form?.error}
				<Alert variant="error">
					{form.error}
				</Alert>
			{/if}

			<form
				method="POST"
				use:enhance={() => {
					loading = true;
					return async ({ update }) => {
						loading = false;
						await update();
					};
				}}
				class="space-y-4"
			>
				<div class="form-control">
					<label class="label" for="username">
						<span class="label-text">Username</span>
					</label>
					<input
						id="username"
						name="username"
						type="text"
						placeholder="Enter your username"
						class="input input-bordered"
						required
					/>
				</div>

				<div class="form-control">
					<label class="label" for="password">
						<span class="label-text">Password</span>
					</label>
					<input
						id="password"
						name="password"
						type="password"
						placeholder="Enter your password"
						class="input input-bordered"
						required
					/>
					<label class="label">
						<a href="#" class="label-text-alt link link-hover">Forgot password?</a>
					</label>
				</div>

				<div class="form-control">
					<label class="label cursor-pointer justify-start gap-3">
						<input type="checkbox" class="checkbox checkbox-primary checkbox-sm" />
						<span class="label-text">Remember me</span>
					</label>
				</div>

				<button type="submit" class="btn btn-primary w-full" disabled={loading}>
					{#if loading}
						<span class="loading loading-spinner loading-sm"></span>
					{/if}
					Sign In
				</button>
			</form>

			<div class="divider">OR</div>

			<div class="text-center text-sm">
				<p class="text-base-content/70">
					Don't have an account?
					<a href="#" class="link link-primary">Sign up</a>
				</p>
			</div>

			<div class="mt-4 p-4 bg-base-200 rounded-lg">
				<p class="text-sm font-medium mb-2">Demo Credentials:</p>
				<p class="text-sm text-base-content/70">
					Username: <code class="bg-base-300 px-1 rounded">admin</code><br />
					Password: <code class="bg-base-300 px-1 rounded">admin123</code>
				</p>
			</div>
		</div>
	</div>
</div>
