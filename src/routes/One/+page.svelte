<script>
	import { reaperStore, ReaPerStore } from '$lib/ReaPerStore';

	// Set a global prefix for keys to organize stored data
	ReaPerStore.setPrefix('myApp:');

	// Create stores
	const counterStore = reaperStore('counter', 0);
	const settingsStore = reaperStore('settings', { theme: 'light', notifications: true });

	// Reactive values via $ syntax
	// let $counterStore;
	// let $settingsStore;

	// Handlers
	const incrementCounter = () => $counterStore++;
	const decrementCounter = () => ($counterStore = Math.max(0, $counterStore - 1));
	const toggleTheme = () =>
		($settingsStore = {
			...$settingsStore,
			theme: $settingsStore.theme === 'light' ? 'dark' : 'light'
		});
	const toggleNotifications = () =>
		($settingsStore = { ...$settingsStore, notifications: !$settingsStore.notifications });

	// $: document.documentElement.className = $settingsStore.theme;
</script>

<div class="container">
	<h1>Persistent Counter</h1>
	<p>Count: {$counterStore}</p>
	<button on:click={incrementCounter}>Increment</button>
	<button on:click={decrementCounter}>Decrement</button>
 
	<hr />

	<h2>Settings</h2>
	<p>Theme: {$settingsStore.theme}</p>
	<p>Notifications: {$settingsStore.notifications ? 'Enabled' : 'Disabled'}</p>
	<button on:click={toggleTheme}>Toggle Theme</button>
	<button on:click={toggleNotifications}>Toggle Notifications</button>
</div>

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

	.container {
		padding: 2rem;
		text-align: center;
	}

	button {
		margin: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
	}
</style>
