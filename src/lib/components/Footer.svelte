<script lang="ts">
	type Props = {
		simple?: boolean;
	};

	let { simple = false }: Props = $props();
</script>

{#if simple}
	<footer class="footer footer-center p-4 bg-base-200 text-base-content">
		<aside>
			<p>© {new Date().getFullYear()} SvelteKit Boilerplate. All rights reserved.</p>
		</aside>
	</footer>
{:else}
	<footer class="footer bg-base-200 text-base-content p-10">
		<nav>
			<h6 class="footer-title">Product</h6>
			<a href="/#features" class="link link-hover">Features</a>
			<a href="/#about" class="link link-hover">About</a>
			<a href="/login" class="link link-hover">Login</a>
		</nav>
		<nav>
			<h6 class="footer-title">Company</h6>
			<a href="/#about" class="link link-hover">About us</a>
			<a href="/#" class="link link-hover">Contact</a>
			<a href="/#" class="link link-hover">Blog</a>
		</nav>
		<nav>
			<h6 class="footer-title">Legal</h6>
			<a href="/#" class="link link-hover">Terms of use</a>
			<a href="/#" class="link link-hover">Privacy policy</a>
			<a href="/#" class="link link-hover">Cookie policy</a>
		</nav>
	</footer>
	<footer class="footer footer-center p-4 bg-base-300 text-base-content border-t border-base-content/10">
		<aside>
			<p>© {new Date().getFullYear()} SvelteKit Boilerplate. Built with Tailwind CSS & DaisyUI.</p>
		</aside>
	</footer>
{/if}
