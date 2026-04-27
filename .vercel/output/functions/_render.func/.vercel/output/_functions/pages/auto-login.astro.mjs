/* empty css                                      */
import { c as createAstro, d as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D58YaVmd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BP4TqvQF.mjs';
import { a as apiFetch } from '../chunks/api_DglEuhCB.mjs';
import { s as setSessionCookie } from '../chunks/session_zTxd9fJv.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://speivalidator.com");
const $$AutoLogin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AutoLogin;
  const ALLOWED_RETURN = ["/cuenta", "/checkout", "/checkout/success"];
  const ott = Astro2.url.searchParams.get("ott");
  const requestedReturnTo = Astro2.url.searchParams.get("return_to") ?? "/cuenta";
  let error = null;
  if (!ott) {
    error = "Falta el token de acceso.";
  } else {
    try {
      const data = await apiFetch("/auth/consume-ott", {
        method: "POST",
        body: { token: ott }
      });
      setSessionCookie(Astro2.cookies, data.access_token, data.expires_in ?? 3600);
      const target = ALLOWED_RETURN.includes(data.return_to ?? "") ? data.return_to : ALLOWED_RETURN.includes(requestedReturnTo) ? requestedReturnTo : "/cuenta";
      return Astro2.redirect(target);
    } catch (e) {
      error = e instanceof Error ? e.message : "No pudimos iniciar tu sesi\xF3n.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciando sesi\xF3n \xB7 SPEI Scan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center px-4"> <div class="w-full max-w-md rounded-2xl border border-brand-line bg-brand-surface/60 p-8 backdrop-blur-sm"> <h1 class="font-display text-2xl text-white mb-3">No pudimos iniciarte sesión</h1> <p class="text-white/60 mb-6 text-sm">${error}</p> <p class="text-white/45 text-sm mb-6">
El enlace pudo haber expirado o ya se utilizó. Vuelve a tu app y solicita un nuevo enlace.
</p> <a href="/login" class="btn-primary w-full text-center block">Iniciar sesión manualmente</a> </div> </section> ` })}`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/auto-login.astro", void 0);

const $$file = "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/auto-login.astro";
const $$url = "/auto-login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AutoLogin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
