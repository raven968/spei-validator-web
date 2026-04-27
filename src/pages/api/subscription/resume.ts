import type { APIRoute } from 'astro';
import { apiFetch, ApiError } from '../../../lib/api';

export const POST: APIRoute = async ({ locals, redirect }) => {
  if (!locals.sessionToken) {
    return redirect('/login?return_to=%2Fcuenta');
  }

  try {
    await apiFetch('/subscription/resume', {
      method: 'POST',
      token: locals.sessionToken,
      origin: import.meta.env.WEB_URL,
    });
    return redirect('/cuenta?notice=resumed');
  } catch (e) {
    const message = e instanceof ApiError ? e.message : 'No pudimos reanudar la suscripción.';
    return redirect(`/cuenta?error=${encodeURIComponent(message)}`);
  }
};
