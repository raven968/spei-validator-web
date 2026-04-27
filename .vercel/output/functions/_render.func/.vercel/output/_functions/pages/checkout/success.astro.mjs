/* empty css                                         */
import { d as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D58YaVmd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BP4TqvQF.mjs';
export { renderers } from '../../renderers.mjs';

const $$Success = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xA1Listo! \xB7 SPEI Scan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center px-4 py-32"> <div class="card p-10 max-w-md text-center"> <div class="w-14 h-14 mx-auto mb-6 rounded-full bg-brand-green/15 flex items-center justify-center"> <svg class="w-7 h-7 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="5 13 10 18 20 7"></polyline> </svg> </div> <h1 class="font-display text-2xl text-white mb-3">¡Bienvenido!</h1> <p class="text-white/60 text-sm mb-7">
Tu suscripción está activa. Ya puedes validar comprobantes SPEI desde la app.
</p> <a href="/cuenta" class="btn-primary w-full">Ir a mi cuenta</a> <p class="mt-5 text-xs text-white/40">
Los cambios pueden tardar unos segundos en reflejarse en la app móvil.
</p> </div> </section> ` })}`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/checkout/success.astro", void 0);

const $$file = "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/checkout/success.astro";
const $$url = "/checkout/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
