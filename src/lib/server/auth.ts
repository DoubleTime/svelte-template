import type { Cookies } from '@sveltejs/kit';

// Demo users for testing - replace with real database in production
const DEMO_USERS = [
    { id: '1', username: 'admin@example.com', password: 'admin123', role: 'admin' as const },
    { id: '2', username: 'user@example.com', password: 'user123', role: 'user' as const }
];

const SESSION_COOKIE_NAME = 'session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

// Simple in-memory session store - replace with Redis/DB in production
const sessions = new Map<string, { userId: string; expiresAt: number }>();

export type User = {
    id: string;
    username: string;
    role: 'admin' | 'user';
};

function generateSessionId(): string {
    return crypto.randomUUID();
}

export function validateCredentials(
    username: string,
    password: string
): User | null {
    const user = DEMO_USERS.find(
        (u) => u.username === username && u.password === password
    );
    if (!user) return null;
    return { id: user.id, username: user.username, role: user.role };
}

export function createSession(cookies: Cookies, user: User): void {
    const sessionId = generateSessionId();
    const expiresAt = Date.now() + SESSION_MAX_AGE * 1000;

    sessions.set(sessionId, { userId: user.id, expiresAt });

    cookies.set(SESSION_COOKIE_NAME, sessionId, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: SESSION_MAX_AGE
    });
}

export function validateSession(cookies: Cookies): User | null {
    const sessionId = cookies.get(SESSION_COOKIE_NAME);
    if (!sessionId) return null;

    const session = sessions.get(sessionId);
    if (!session) return null;

    if (session.expiresAt < Date.now()) {
        sessions.delete(sessionId);
        return null;
    }

    const user = DEMO_USERS.find((u) => u.id === session.userId);
    if (!user) return null;

    return { id: user.id, username: user.username, role: user.role };
}

export function destroySession(cookies: Cookies): void {
    const sessionId = cookies.get(SESSION_COOKIE_NAME);
    if (sessionId) {
        sessions.delete(sessionId);
    }
    cookies.delete(SESSION_COOKIE_NAME, { path: '/' });
}
