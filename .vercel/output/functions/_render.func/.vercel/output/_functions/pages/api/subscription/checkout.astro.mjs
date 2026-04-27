import { a as apiFetch, A as ApiError } from '../../../chunks/api_DglEuhCB.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, locals, redirect }) => {
  if (!locals.sessionToken) {
    return redirect("/login?return_to=%2Fcheckout");
  }
  const form = await request.formData();
  const planSlug = String(form.get("plan_slug") ?? "");
  const webUrl = "http://localhost:4321";
  try {
    const data = await apiFetch("/subscription/checkout", {
      method: "POST",
      token: locals.sessionToken,
      origin: webUrl,
      body: {
        plan_slug: planSlug,
        success_url: `${webUrl}/checkout/success`,
        cancel_url: `${webUrl}/checkout/cancel`
      }
    });
    return redirect(data.checkout_url);
  } catch (e) {
    const message = e instanceof ApiError ? e.message : "No pudimos iniciar el pago.";
    return redirect(`/checkout?error=${encodeURIComponent(message)}`);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
