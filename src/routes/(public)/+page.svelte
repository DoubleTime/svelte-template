<script lang="ts">
	const features = [
		{
			icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
			title: 'Secure Authentication',
			description:
				'Built-in cookie-based authentication with protected admin routes and secure session management.'
		},
		{
			icon: 'M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495',
			title: 'Theme Switching',
			description:
				'Out-of-the-box light and dark mode with smooth transitions and localStorage persistence.'
		},
		{
			icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
			title: 'Admin Dashboard',
			description:
				'Complete admin panel with sidebar navigation, user management, and settings pages.'
		},
		{
			icon: 'M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3',
			title: 'Reusable Components',
			description:
				'Pre-built DaisyUI components including Navbar, Sidebar, Modals, Alerts, and more.'
		},
		{
			icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
			title: 'Modern Styling',
			description:
				'Tailwind CSS v4 with DaisyUI v5 for beautiful, utility-first styling out of the box.'
		},
		{
			icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
			title: 'Fast & Lightweight',
			description:
				'SvelteKit with Vite for lightning-fast development and optimized production builds.'
		}
	];
</script>

<svelte:head>
	<title>SvelteKit Boilerplate - Build Faster</title>
	<meta
		name="description"
		content="A production-ready SvelteKit boilerplate with authentication, admin panel, and beautiful UI components."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero min-h-[80vh] bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
	<div class="hero-content text-center py-20">
		<div class="max-w-3xl">
			<div class="badge badge-primary badge-outline mb-4 animate-pulse">✨ Production Ready</div>
			<h1 class="text-5xl md:text-6xl font-bold leading-tight">
				Build Amazing Apps
				<span class="gradient-text block">Faster Than Ever</span>
			</h1>
			<p class="py-6 text-lg text-base-content/70 max-w-xl mx-auto">
				A complete SvelteKit boilerplate with authentication, admin dashboard, and beautiful DaisyUI
				components. Start building in minutes, not hours.
			</p>
			<div class="flex gap-4 justify-center flex-wrap">
				<a href="/login" class="btn btn-primary btn-lg hover-lift">
					Get Started
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
				<a href="#features" class="btn btn-outline btn-lg hover-lift"> Learn More </a>
			</div>

			<div class="mt-12 flex items-center justify-center gap-8 text-sm text-base-content/60">
				<div class="flex items-center gap-2">
					<span class="text-success">✓</span> SvelteKit
				</div>
				<div class="flex items-center gap-2">
					<span class="text-success">✓</span> Tailwind CSS
				</div>
				<div class="flex items-center gap-2">
					<span class="text-success">✓</span> DaisyUI
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="py-20 bg-base-200/50">
	<div class="container mx-auto px-4">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-4">Everything You Need</h2>
			<p class="text-base-content/70 max-w-2xl mx-auto">
				A carefully crafted boilerplate with all the essentials to kickstart your next project.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each features as feature (feature.title)}
				<div class="card bg-base-100 shadow-md hover-lift">
					<div class="card-body">
						<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 text-primary"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d={feature.icon} />
							</svg>
						</div>
						<h3 class="card-title text-lg">{feature.title}</h3>
						<p class="text-base-content/70 text-sm">{feature.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="py-20">
	<div class="container mx-auto px-4">
		<div class="flex flex-col lg:flex-row items-center gap-12">
			<div class="flex-1">
				<h2 class="text-4xl font-bold mb-6">Ready for Production</h2>
				<p class="text-base-content/70 mb-6">
					This boilerplate is designed to be a solid foundation for your next SvelteKit project. It
					includes authentication, admin panel, and all the components you need to build a complete
					application.
				</p>
				<ul class="space-y-3">
					<li class="flex items-center gap-3">
						<span class="badge badge-primary badge-sm">✓</span>
						Cookie-based authentication with session management
					</li>
					<li class="flex items-center gap-3">
						<span class="badge badge-primary badge-sm">✓</span>
						Protected admin routes with role-based access
					</li>
					<li class="flex items-center gap-3">
						<span class="badge badge-primary badge-sm">✓</span>
						Responsive design that works on all devices
					</li>
					<li class="flex items-center gap-3">
						<span class="badge badge-primary badge-sm">✓</span>
						Dark mode support with smooth transitions
					</li>
				</ul>
			</div>
			<div class="flex-1">
				<div class="mockup-window border bg-base-300">
					<div class="flex flex-col items-center justify-center px-4 py-16 bg-base-200">
						<div class="text-6xl mb-4">🚀</div>
						<p class="text-center text-base-content/70">Your app preview here</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-primary text-primary-content">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-4xl font-bold mb-4">Ready to Get Started?</h2>
		<p class="mb-8 opacity-90 max-w-xl mx-auto">
			Clone this boilerplate and start building your next project today. It's free and open source.
		</p>
		<div class="flex gap-4 justify-center flex-wrap">
			<a href="/login" class="btn btn-secondary btn-lg"> Try Demo </a>
			<a
				href="https://github.com"
				target="_blank"
				class="btn btn-outline btn-lg border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
			>
				View on GitHub
			</a>
		</div>
	</div>
</section>
