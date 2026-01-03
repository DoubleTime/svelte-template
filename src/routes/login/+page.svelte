<script lang="ts">
	import { enhance } from '$app/forms';
	import Alert from '$lib/components/Alert.svelte';

	let { form } = $props();
	let loading = $state(false);
	let showPassword = $state(false);
</script>

<svelte:head>
	<title>Login | SvelteKit Boilerplate</title>
</svelte:head>

<div
	class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 p-4"
>
	<div class="card w-full max-w-md bg-base-100 shadow-xl">
		<div class="card-body p-8 sm:p-10">
			<div class="text-center mb-8">
				<h1 class="text-3xl font-bold">Login</h1>
				<p class="text-base-content/60 mt-2">
					Seamless Access, Secure Connection: Your Gateway<br />to a Personalized Experience.
				</p>
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
				class="space-y-5"
			>
				<div class="form-control">
					<label class="label" for="username">
						<span class="label-text font-medium">Email Address</span>
					</label>
					<label class="input input-bordered flex items-center gap-3 w-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 opacity-50"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<input
							id="username"
							name="username"
							type="email"
							placeholder="Email Address"
							class="grow bg-transparent outline-none"
							required
						/>
					</label>
				</div>

				<div class="form-control">
					<label class="label" for="password">
						<span class="label-text font-medium">Password</span>
					</label>
					<label class="input input-bordered flex items-center gap-3 w-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 opacity-50"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
							/>
						</svg>
						<input
							id="password"
							name="password"
							type={showPassword ? 'text' : 'password'}
							placeholder="Password"
							class="grow bg-transparent outline-none"
							required
						/>
						<button
							type="button"
							class="btn btn-ghost btn-circle btn-sm"
							onclick={() => (showPassword = !showPassword)}
						>
							{#if showPassword}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 opacity-50"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
									/>
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 opacity-50"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
							{/if}
						</button>
					</label>
					<div class="text-right mt-2">
						<a href="#" class="text-sm link link-primary">Forgot Password?</a>
					</div>
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
					Email: <code class="bg-base-300 px-1 rounded">admin@example.com</code><br />
					Password: <code class="bg-base-300 px-1 rounded">admin123</code>
				</p>
			</div>
		</div>
	</div>
</div>
