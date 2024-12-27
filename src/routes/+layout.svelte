<script>
	import '$lib/pico.css';
	import '$lib/app.css';

	let { children } = $props();

	function clearLocalStorage() {
		localStorage.clear();
	}
	function logLocalStorage() {
		console.log(localStorage);
	}
</script>

<nav>
	<a href="/">Home</a>
	<a href="/One">One</a>
	<a href="/Two">Two</a>
	<button onclick={logLocalStorage}>Log Local Storage</button>
	<button onclick={clearLocalStorage}>Clear Local Storage</button>
</nav>

{@render children()}

<style>
	nav {
		padding: 1em;
	}

	nav a {
		margin-right: 1em;
	}
</style>
