import { writable } from 'svelte/store';

/**
 * ReaPerStore: A persistent and reactive store for Svelte.
 */
export class ReaPerStore {
	static prefix = '';

	#key;
	#store;

	/**
	 * @param {string} key
	 * @param {T} defaultValue
	 */
	constructor(key, defaultValue) {
		this.#key = ReaPerStore.prefix + key;

		// Initialize the writable store with stored or default value
		const stored = typeof window !== 'undefined' ? window.localStorage.getItem(this.#key) : null;
		this.#store = writable(stored ? JSON.parse(stored) : defaultValue);

		// Subscribe to the store to persist changes
		this.#store.subscribe((value) => {
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(this.#key, JSON.stringify(value));
			}
		});

		// Listen for changes from other tabs and update the store
		if (typeof window !== 'undefined') {
			window.addEventListener('storage', (event) => {
				console.log('Storage event:', event);
				console.log('Storage event:', event.key, event.newValue);
				if (event.key === this.#key && event.newValue) {
					this.#store.set(JSON.parse(event.newValue));
				}
			});
		}
	}

	/**
	 * Set a prefix for all keys to organize data in localStorage.
	 * @param {string} prefix
	 */
	static setPrefix(prefix) {
		ReaPerStore.prefix = prefix;
	}

	/**
	 * Svelte store `subscribe` method.
	 * Allows this class to be used directly with Svelte's `$` reactive syntax.
	 * @param {function(T): void} callback
	 * @returns {function(): void} Unsubscribe function
	 */
	subscribe(callback) {
		return this.#store.subscribe(callback);
	}

	/**
	 * Set the store's value.
	 * @param {T} value
	 */
	set(value) {
		this.#store.set(value);
	}

	/**
	 * Update the store's value based on a callback.
	 * @param {(value: T) => T} updater
	 */
	update(updater) {
		this.#store.update(updater);
	}

	/**
	 * Retrieve all entries in localStorage with the defined prefix.
	 * @returns {Record<string, string>}
	 */
	static getEntriesWithPrefix() {
		if (typeof window === 'undefined') return {};

		const entries = {};
		for (let i = 0; i < window.localStorage.length; i++) {
			const key = window.localStorage.key(i);
			if (key?.startsWith(ReaPerStore.prefix)) {
				entries[key] = window.localStorage.getItem(key) || '';
			}
		}
		return entries;
	}

	/**
	 * Clear all keys in localStorage with the defined prefix.
	 */
	static clearWithPrefix() {
		if (typeof window === 'undefined') return;

		const keysToRemove = [];
		for (let i = 0; i < window.localStorage.length; i++) {
			const key = window.localStorage.key(i);
			if (key?.startsWith(ReaPerStore.prefix)) {
				keysToRemove.push(key);
			}
		}

		keysToRemove.forEach((key) => window.localStorage.removeItem(key));
	}

	/**
	 * Export all entries in localStorage with the defined prefix as a JSON string and let the user download it.
	 */
	static exportWithPrefix() {
		const entries = ReaPerStore.getEntriesWithPrefix();
		const blob = new Blob([JSON.stringify(entries)], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'reaperstore-export.json';
		a.click();
		URL.revokeObjectURL(url);
	}

	/**
	 * Import entries from a JSON file and store them in localStorage.
	 * @param {File} file
	 */
	static importFromFile(file) {
		const reader = new FileReader();
		reader.onload = (event) => {
			const entries = JSON.parse(event.target.result);
			try {
				Object.entries(entries).forEach(([key, value]) => {
					window.localStorage.setItem(key, value);
				});
				// trigger event to update all stores
				window.dispatchEvent(new Event('storage'));
				// log success message
				console.log('Data imported successfully.', window.localStorage);
			} catch (error) {
				console.log('Error importing data:', error);
			}
		};
		reader.readAsText(file);
	}
}
// Factory function to create a new ReaPerStore instance
export function reaperStore(key, defaultValue) {
	return new ReaPerStore(key, defaultValue);
}
