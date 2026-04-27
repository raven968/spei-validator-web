import { a as apiFetch, A as ApiError } from '../../../chunks/api_DglEuhCB.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ locals, redirect }) => {
  if (!locals.sessionToken) {
    return redirect("/login?return_to=%2Fcuenta");
  }
  const webUrl = "http://localhost:4321";
  try {
    const data = await apiFetch("/subscription/portal", {
      method: "POST",
      token: locals.sessionToken,
      origin: webUrl,
      body: { return_url: `${webUrl}/cuenta` }
    });
    return redirect(data.url);
  } catch (e) {
    const message = e instanceof ApiError ? e.message : "No pudimos abrir el portal.";
    return redirect(`/cuenta?error=${encodeURIComponent(message)}`);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
