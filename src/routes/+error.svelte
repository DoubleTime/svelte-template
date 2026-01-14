<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
	<div class="text-center max-w-lg">
		<!-- Animated 404 Number -->
		<div class="relative mb-1">
			<h1 class="font-black error-bg-text">
				{page.status}
			</h1>
		</div>

		<!-- Error Icon -->
		<div class="mb-6 flex justify-center">
			<div class="relative">
				<div
					class="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-bounce"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-12 h-12 text-primary"
					>
						<circle cx="12" cy="12" r="10" />
						<path d="M16 16s-1.5-2-4-2-4 2-4 2" />
						<line x1="9" y1="9" x2="9.01" y2="9" />
						<line x1="15" y1="9" x2="15.01" y2="9" />
					</svg>
				</div>
				<!-- Decorative circles -->
				<div class="absolute -top-2 -right-2 w-6 h-6 bg-secondary/30 rounded-full"></div>
				<div class="absolute -bottom-1 -left-3 w-4 h-4 bg-accent/30 rounded-full"></div>
			</div>
		</div>

		<!-- Error Message -->
		<h2 class="text-2xl md:text-3xl font-bold text-base-content mb-3">
			{#if page.status === 404}
				Page Not Found
			{:else}
				Something Went Wrong
			{/if}
		</h2>
		<p class="text-base-content/60 mb-8 max-w-md mx-auto">
			{#if page.status === 404}
				Oops! The page you're looking for seems to have wandered off. Let's get you back on track.
			{:else if page.error?.message}
				{page.error.message}
			{:else}
				An unexpected error occurred. Please try again later.
			{/if}
		</p>

		<!-- Action Buttons -->
		<div class="flex flex-col sm:flex-row gap-3 justify-center">
			<a href="/" class="btn btn-primary btn-lg gap-2 hover-lift">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5"
				>
					<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
					<path
						d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
					/>
				</svg>
				Go Home
			</a>
			<button onclick={() => history.back()} class="btn btn-outline btn-lg gap-2 hover-lift">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5"
				>
					<path d="M19 12H5" />
					<path d="m12 19-7-7 7-7" />
				</svg>
				Go Back
			</button>
		</div>
	</div>
</div>

<style>
	/* Large 404 text sizes - using explicit CSS since Tailwind arbitrary values weren't compiling */
	.error-bg-text {
		font-size: 150px;
	}

	@media (min-width: 768px) {
		.error-bg-text {
			font-size: 100px;
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animate-bounce {
		animation: float 3s ease-in-out infinite;
	}
</style>
