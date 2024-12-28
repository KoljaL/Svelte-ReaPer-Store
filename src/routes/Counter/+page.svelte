<script>
	import { reaperStore, ReaPerStore } from '$lib/ReaPerStore';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	onMount(() => {
		document.documentElement.setAttribute('data-theme', $settingsStore.theme);
	});

	// Set a global prefix for keys to organize stored data
	ReaPerStore.setPrefix('myApp:');

	// Create stores
	const counterStore = reaperStore('counter', 0);
	const settingsStore = reaperStore('settings', { theme: 'light', notifications: true });

	// Handlers
	const incrementCounter = () => $counterStore++;
	const decrementCounter = () => ($counterStore = Math.max(0, $counterStore - 1));

	function toggleTheme() {
		$settingsStore = {
			...$settingsStore,
			theme: $settingsStore.theme === 'light' ? 'dark' : 'light'
		};
		document.documentElement.setAttribute('data-theme', $settingsStore.theme);
	}

	const toggleNotifications = () =>
		($settingsStore = { ...$settingsStore, notifications: !$settingsStore.notifications });

	$: if (browser) {
		document.documentElement.setAttribute('data-theme', $settingsStore.theme);
	}
</script>

<div class="container">
	<h3>Settings</h3>
	<p>
		Theme: {$settingsStore.theme}
		<button on:click={toggleTheme}>Toggle Theme</button>
	</p>
	<p>
		Notifications: {$settingsStore.notifications ? 'Enabled' : 'Disabled'}
		<button on:click={toggleNotifications}>Toggle Notifications</button>
	</p>
</div>

<hr />
<h3>Persistent Counter</h3>
<p>Count: {$counterStore}</p>
<button on:click={incrementCounter}>Increment</button>
<button on:click={decrementCounter}>Decrement</button>

<style>
	:global(body) {
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: var(--background-color);
		color: var(--text-color);
	}

	:global(:root.light) {
		--background-color: #fff;
		--text-color: #000;
	}

	:global(:root.dark) {
		--background-color: #121212;
		--text-color: #fff;
	}

	button {
		margin: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
	}
</style>
