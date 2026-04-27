/* empty css                                      */
import { c as createAstro, d as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_D58YaVmd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BP4TqvQF.mjs';
import { a as apiFetch, A as ApiError } from '../chunks/api_DglEuhCB.mjs';
import { s as setSessionCookie } from '../chunks/session_zTxd9fJv.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://speivalidator.com");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const ALLOWED_RETURN = ["/cuenta", "/checkout", "/checkout/success"];
  let error = null;
  let email = "";
  const requestedReturn = Astro2.url.searchParams.get("return_to") ?? "/cuenta";
  const safeReturn = ALLOWED_RETURN.includes(requestedReturn) ? requestedReturn : "/cuenta";
  if (Astro2.request.method === "POST") {
    const form = await Astro2.request.formData();
    email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    try {
      const data = await apiFetch("/auth/login", {
        method: "POST",
        body: { email, password }
      });
      setSessionCookie(Astro2.cookies, data.access_token);
      return Astro2.redirect(safeReturn);
    } catch (e) {
      error = e instanceof ApiError ? e.message : "No pudimos iniciar sesi\xF3n.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar sesi\xF3n \xB7 SPEI Scan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center px-4 py-32"> <div class="w-full max-w-md"> <div class="mb-8 text-center"> <p class="eyebrow">Bienvenido de vuelta</p> <h1 class="display-h2 mt-3">Inicia sesión</h1> </div> <form method="POST" class="card p-7 space-y-5"> ${error && renderTemplate`<div class="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"> ${error} </div>`} <label class="block"> <span class="text-xs font-mono uppercase tracking-wider text-white/40">Correo</span> <input type="email" name="email"${addAttribute(email, "value")} required autocomplete="email" class="mt-2 w-full rounded-lg border border-brand-line bg-brand-ink/60 px-4 py-3 text-white placeholder-white/30 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/40"> </label> <label class="block"> <span class="text-xs font-mono uppercase tracking-wider text-white/40">Contraseña</span> <input type="password" name="password" required autocomplete="current-password" class="mt-2 w-full rounded-lg border border-brand-line bg-brand-ink/60 px-4 py-3 text-white placeholder-white/30 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green/40"> </label> <button type="submit" class="btn-primary w-full">Iniciar sesión</button> <p class="text-center text-sm text-white/50">
¿No tienes cuenta?
<a${addAttribute(`/registro?return_to=${encodeURIComponent(safeReturn)}`, "href")} class="text-brand-green hover:underline">Regístrate</a> </p> </form> </div> </section> ` })}`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/login.astro", void 0);

const $$file = "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
