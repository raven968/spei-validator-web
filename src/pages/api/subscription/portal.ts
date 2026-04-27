import type { APIRoute } from 'astro';
import { apiFetch, ApiError } from '../../../lib/api';

export const POST: APIRoute = async ({ locals, redirect }) => {
  if (!locals.sessionToken) {
    return redirect('/login?return_to=%2Fcuenta');
  }

  const webUrl = import.meta.env.WEB_URL;

  try {
    const data = await apiFetch<{ url: string }>('/subscription/portal', {
      method: 'POST',
      token: locals.sessionToken,
      origin: webUrl,
      body: { return_url: `${webUrl}/cuenta` },
    });
    return redirect(data.url);
  } catch (e) {
    const message = e instanceof ApiError ? e.message : 'No pudimos abrir el portal.';
    return redirect(`/cuenta?error=${encodeURIComponent(message)}`);
  }
};
