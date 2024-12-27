<script>
	import { reaperStore, ReaPerStore } from '$lib/ReaPerStore';

	// Set a global prefix
	ReaPerStore.setPrefix('myApp:user');

	// Initialize some individual stores
	const userStore1 = new ReaPerStore('user:1', { name: 'Alice', age: 25 });
	const userStore2 = new ReaPerStore('user:2', { name: 'Bob', age: 30 });
	const userStore3 = new ReaPerStore('user:3', { name: 'Charlie', age: 35 });

	// Retrieve all entries with the defined prefix
	let entries = ReaPerStore.getEntriesWithPrefix();

	// Function to refresh entries (useful after changes)
	const refreshEntries = () => {
		entries = ReaPerStore.getEntriesWithPrefix();
	};

	// Example handler to update an entry
	const updateUser1 = () => {
		$userStore1 = { ...$userStore1, age: $userStore1.age + 1 };
		refreshEntries();
	};
</script>

<div class="container">
	<h1>Home</h1>

	<h2>Manage Multiple Entries with the Same Prefix</h2>

	<div class="entry">
		<p>User 1: {$userStore1.name}, Age: {$userStore1.age}</p>
		<button on:click={updateUser1}>Increase Age</button>
	</div>

	<div class="entry">
		<p>User 2: {$userStore2.name}, Age: {$userStore2.age}</p>
	</div>

	<div class="entry">
		<p>User 3: {$userStore3.name}, Age: {$userStore3.age}</p>
	</div>

	<hr />

	<h2>All Entries with Prefix</h2>
	<ul>
		{#each Object.entries(entries) as [key, value]}
			<li><strong>{key}</strong>: {value}</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		padding: 2rem;
	}

	.entry {
		margin-bottom: 1rem;
	}

	button {
		margin-left: 1rem;
	}
</style>
