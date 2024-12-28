<script>
	import '$lib/pico.css';
	import '$lib/app.css';
	import { page } from '$app/state';

	import { base } from '$app/paths';

	let { children } = $props();

	function clearLocalStorage() {
		localStorage.clear();
	}
	function logLocalStorage() {
		console.log(localStorage);
	}
</script>

<nav>
	<ul>
		<li>
			<a href="{base}/" aria-current={page.url.pathname === '/'}>Home</a>
		</li>
		<li>
			<a href="{base}/Counter" aria-current={page.url.pathname === '/Counter'}>Counter</a>
		</li>
	</ul>
	<div role="group">
		<button
			class="inline"
			onclick={logLocalStorage}
			data-placement="left"
			data-tooltip="See LocalStorage in console output">Log</button
		>
		<button
			class="inline"
			onclick={clearLocalStorage}
			data-placement="left"
			data-tooltip="Remove all entries from LocalStorage">Clear</button
		>
	</div>
</nav>

<main class="container">
	{@render children()}
</main>

<style>
	a[aria-current='true'] {
		color: var(--pico);
	}

	div[role='group'] {
		display: flex;
		justify-content: space-between;
		width: min-content;
		height: 2rem;
	}
</style>
