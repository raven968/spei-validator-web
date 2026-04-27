import type { APIRoute } from 'astro';
import { apiFetch, ApiError } from '../../../lib/api';

export const POST: APIRoute = async ({ request, locals, redirect }) => {
  if (!locals.sessionToken) {
    return redirect('/login?return_to=%2Fcheckout');
  }

  const form = await request.formData();
  const planSlug = String(form.get('plan_slug') ?? '');

  const webUrl = import.meta.env.WEB_URL;

  try {
    const data = await apiFetch<{ checkout_url: string }>('/subscription/checkout', {
      method: 'POST',
      token: locals.sessionToken,
      origin: webUrl,
      body: {
        plan_slug: planSlug,
        success_url: `${webUrl}/checkout/success`,
        cancel_url: `${webUrl}/checkout/cancel`,
      },
    });
    return redirect(data.checkout_url);
  } catch (e) {
    const message = e instanceof ApiError ? e.message : 'No pudimos iniciar el pago.';
    return redirect(`/checkout?error=${encodeURIComponent(message)}`);
  }
};
