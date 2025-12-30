import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { validateCredentials, createSession } from '$lib/server/auth';

export const load: PageServerLoad = async ({ url }) => {
    return {
        redirectTo: url.searchParams.get('redirect') || '/admin'
    };
};

export const actions: Actions = {
    default: async ({ request, cookies, url }) => {
        const formData = await request.formData();
        const username = formData.get('username')?.toString() || '';
        const password = formData.get('password')?.toString() || '';

        if (!username || !password) {
            return fail(400, { error: 'Username and password are required' });
        }

        const user = validateCredentials(username, password);

        if (!user) {
            return fail(401, { error: 'Invalid username or password' });
        }

        createSession(cookies, user);

        const redirectTo = url.searchParams.get('redirect') || '/admin';
        throw redirect(303, redirectTo);
    }
};
