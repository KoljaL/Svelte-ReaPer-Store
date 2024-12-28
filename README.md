
<div style="border: 1px solid red; background-color:rgb(131, 54, 54); padding: 10px; border-radius: 5px;">
  <strong>⚠️ Warning</strong><br>
  This lib is still in development and not yet published to npm. Use at your own risk.  
  And it does not uses Runes yet, but should run fine on Svelte 5.
</div>

# ReaPerStore

**ReaPerStore** is a persistent and reactive store for [Svelte](https://svelte.dev/) applications. It extends Svelte's `writable` store to provide seamless synchronization with `localStorage`, enabling state persistence across sessions and tabs.

## Features

- **Persistent Storage**: Automatically syncs store data with `localStorage`.
- **Reactive**: Works seamlessly with Svelte's `$` reactive syntax.
- **Multi-Tab Sync**: Reflects changes across browser tabs in real time.
- **Key Prefixing**: Organize and namespace your keys in `localStorage`.
- **Easy Management**: Retrieve or clear all keys with a specific prefix.
- **Export & Import**: Easily export and import store data as JSON for backup or sharing.


## Demo

Live demo coming soon!

Styled with [Pico CSS • Minimal CSS Framework for semantic HTML](https://picocss.com/)


## Installation

Install via npm:

```bash
```

## Usage

### Basic Example

```html
<script>
  import { reaperStore } from 'reaper-store';

  // Create a persistent store
  const count = reaperStore('count', 0);

  // Update the store value
  function increment() {
    count.update(n => n + 1);
  }
</script>

<h1>{$count}</h1>
<button on:click={increment}>Increment</button>
```

### Setting a Key Prefix

You can set a prefix to organize your `localStorage` keys:

```javascript
import { ReaPerStore } from 'reaper-store';

ReaPerStore.setPrefix('myApp_');

// Example store keys will now be prefixed (e.g., 'myApp_count')
const count = new ReaPerStore('count', 0);
```

### Clearing All Prefixed Keys

Clear all keys with the defined prefix:

```javascript
ReaPerStore.clearWithPrefix();
```

### Retrieving All Prefixed Entries

Get all entries in `localStorage` with the defined prefix:

```javascript
const entries = ReaPerStore.getEntriesWithPrefix();
console.log(entries); // { myApp_count: "10", myApp_theme: "dark" }
```

## API

### Class: `ReaPerStore`

#### `new ReaPerStore(key, defaultValue)`
Creates a new persistent store.

- **`key`**: The unique key for the store in `localStorage`.
- **`defaultValue`**: The default value if no existing value is found.

#### `static setPrefix(prefix)`
Sets a prefix for all keys.

- **`prefix`**: A string to prefix all `localStorage` keys.

#### `static getEntriesWithPrefix()`
Retrieves all `localStorage` entries with the current prefix.

- **Returns**: An object where keys are the prefixed `localStorage` keys and values are their respective values.

#### `static clearWithPrefix()`
Clears all `localStorage` entries with the current prefix.

#### Instance Methods
- **`subscribe(callback)`**: Subscribes to store changes. Compatible with Svelte's reactive `$` syntax.
- **`set(value)`**: Sets a new value for the store.
- **`update(updater)`**: Updates the store value using an updater function.

### Factory Function: `reaperStore(key, defaultValue)`

A helper function to create a new `ReaPerStore` instance.

- **`key`**: The unique key for the store in `localStorage`.
- **`defaultValue`**: The default value if no existing value is found.

## License

MIT

## Contributions

Contributions are welcome! Feel free to submit issues or pull requests.

## Acknowledgments

Inspired by Svelte's `writable` store, with added persistence and multi-tab sync.