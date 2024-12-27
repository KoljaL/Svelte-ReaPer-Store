<script>
	import { ReaPerStore } from '$lib/ReaPerStore.js';

	// Set a prefix for the first store
	ReaPerStore.setPrefix('userApp_');
	const userStore = new ReaPerStore('user', { name: 'John Doe', age: 30 });

	// Set a different prefix for the second store
	ReaPerStore.setPrefix('settingsApp_');
	const settingsStore = new ReaPerStore('settings', { theme: 'light', notifications: true });

	// Access the writable stores
	const user = userStore.store;
	const settings = settingsStore.store;
</script>

<h1>One</h1>

<main>
	<h1>User Information</h1>
	<label>
		Name:
		<input type="text" bind:value={$user.name} />
	</label>
	<label>
		Age:
		<input type="number" bind:value={$user.age} />
	</label>

	<h1>Settings</h1>
	<label>
		Theme:
		<select bind:value={$settings.theme}>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>
	</label>
	<label>
		Notifications:
		<input type="checkbox" bind:checked={$settings.notifications} />
	</label>
</main>
