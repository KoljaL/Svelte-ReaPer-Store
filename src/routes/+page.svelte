<script>
	import { reaperStore, ReaPerStore } from '$lib/ReaPerStore';

	// Set a global prefix
	ReaPerStore.setPrefix('myApp:');

	// Initialize some individual stores
	const userStore1 = reaperStore('user:1', { name: 'Alice', age: 25 });
	const userStore2 = reaperStore('user:2', { name: 'Bob', age: 30 });
	const userStore3 = reaperStore('user:3', { name: 'Charlie', age: 35 });

	// Retrieve all entries with the defined prefix
	let entries = ReaPerStore.getEntriesWithPrefix();

	// Function to refresh entries (useful after changes)
	const refreshEntries = () => {
		entries = ReaPerStore.getEntriesWithPrefix();
	};

	function updateUser(userstore) {
		return () => {
			userstore.update((data) => {
				data.age++;
				return data;
			});
			refreshEntries();
		};
	}

	// Import data
	let importMessage = 'Import Data';
	let importFileData = false;

	function handleUpload(event) {
		const file = event.target.files[0];
		if (file) {
			importFileData = file;
		}
	}

	function importData() {
		ReaPerStore.importFromFile(importFileData);
		console.log(importFileData);
		importMessage = 'Data imported successfully';
	}
</script>

<h3>Manage Multiple Entries with the Same Prefix</h3>
<div class="row">
	<div class="left">
		<div class="entry">
			<p>
				User 1: {$userStore1.name}, Age: {$userStore1.age}
				<button class="inline" onclick={updateUser(userStore1)}>Increase Age</button>
			</p>
		</div>

		<div class="entry">
			<p>
				User 2: {$userStore2.name}, Age: {$userStore2.age}
				<button class="inline" onclick={updateUser(userStore2)}>Increase Age</button>
			</p>
		</div>

		<div class="entry">
			<p>
				User 3: {$userStore3.name}, Age: {$userStore3.age}
				<button class="inline" onclick={updateUser(userStore3)}>Increase Age</button>
			</p>
		</div>
	</div>

	<div class="right">
		<ul>
			{#each Object.entries(entries) as [key, value]}
				<li><strong>{key}</strong>: {value}</li>
			{/each}
		</ul>
	</div>
</div>
<hr />

<h3>Export & Import</h3>
<div class="row">
	<div class="left">
		<button
			onclick={() => {
				ReaPerStore.exportWithPrefix();
			}}>Export Data</button
		>
	</div>
	<div class="right">
		<input type="file" accept=".json" onchange={handleUpload} />
		{#if importFileData}
			<button onclick={importData}> {importMessage} </button>
		{/if}
	</div>
</div>

<style>
	.entry {
		margin-bottom: 1rem;
	}

	.row {
		display: flex;
		justify-content: space-between;
	}
	.left {
		width: 45%;
	}
	.right {
		width: 45%;
	}

	/* Optional: adjust button styles */
</style>
