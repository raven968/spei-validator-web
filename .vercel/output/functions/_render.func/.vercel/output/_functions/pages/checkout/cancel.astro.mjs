/* empty css                                         */
import { d as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D58YaVmd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BP4TqvQF.mjs';
export { renderers } from '../../renderers.mjs';

const $$Cancel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pago cancelado \xB7 SPEI Scan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center px-4 py-32"> <div class="card p-10 max-w-md text-center"> <h1 class="font-display text-2xl text-white mb-3">Pago cancelado</h1> <p class="text-white/60 text-sm mb-7">
No se realizó ningún cargo. Puedes intentarlo de nuevo cuando quieras.
</p> <div class="space-y-3"> <a href="/checkout" class="btn-primary w-full">Ver planes de nuevo</a> <a href="/cuenta" class="btn-ghost w-full">Volver a mi cuenta</a> </div> </div> </section> ` })}`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/checkout/cancel.astro", void 0);

const $$file = "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/checkout/cancel.astro";
const $$url = "/checkout/cancel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cancel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
