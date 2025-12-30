import { redirect, type Handle } from '@sveltejs/kit';
import { validateSession } from '$lib/server/auth';

export const handle: Handle = async ({ event, resolve }) => {
    // Validate session and set user in locals
    event.locals.user = validateSession(event.cookies);

    // Protect admin routes
    if (event.url.pathname.startsWith('/admin')) {
        if (!event.locals.user) {
            throw redirect(303, '/login?redirect=' + encodeURIComponent(event.url.pathname));
        }
        if (event.locals.user.role !== 'admin') {
            throw redirect(303, '/');
        }
    }

    // Redirect authenticated users away from login page
    if (event.url.pathname === '/login' && event.locals.user) {
        throw redirect(303, '/admin');
    }

    return resolve(event);
};
