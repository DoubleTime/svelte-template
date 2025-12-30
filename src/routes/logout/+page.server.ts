import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { destroySession } from '$lib/server/auth';

export const load: PageServerLoad = async ({ cookies }) => {
    destroySession(cookies);
    throw redirect(303, '/');
};
