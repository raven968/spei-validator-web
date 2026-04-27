import { a as apiFetch, A as ApiError } from '../../../chunks/api_DglEuhCB.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ locals, redirect }) => {
  if (!locals.sessionToken) {
    return redirect("/login?return_to=%2Fcuenta");
  }
  try {
    await apiFetch("/subscription/resume", {
      method: "POST",
      token: locals.sessionToken,
      origin: "http://localhost:4321"
    });
    return redirect("/cuenta?notice=resumed");
  } catch (e) {
    const message = e instanceof ApiError ? e.message : "No pudimos reanudar la suscripción.";
    return redirect(`/cuenta?error=${encodeURIComponent(message)}`);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
