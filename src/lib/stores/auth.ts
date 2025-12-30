import { writable } from 'svelte/store';
import type { User } from '$lib/server/auth';

// Client-side auth store for reactive UI updates
export const user = writable<User | null>(null);

export function setUser(userData: User | null) {
    user.set(userData);
}
