import { Writable } from 'svelte/store';

export class ReaPerStore<T> {
    static prefix: string;

    constructor(key: string, defaultValue: T);

    static setPrefix(prefix: string): void;

    static getEntriesWithPrefix(): Record<string, T>;

    static exportWithPrefix(): void;

    static importFromFile(file: File): void;

    subscribe(run: (value: T) => void, invalidate?: (value?: T) => void): () => void;

    set(value: T): void;

    update(updater: (value: T) => T): void;
}
