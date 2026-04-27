/* empty css                                      */
import { c as createAstro, d as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_D58YaVmd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BP4TqvQF.mjs';
import { a as apiFetch, A as ApiError } from '../chunks/api_DglEuhCB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://speivalidator.com");
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkout;
  const token = Astro2.locals.sessionToken;
  const error = Astro2.url.searchParams.get("error");
  let plans = [];
  let status = null;
  let loadError = null;
  try {
    [plans, status] = await Promise.all([
      apiFetch("/plans"),
      apiFetch("/subscription/status", { token })
    ]);
  } catch (e) {
    loadError = e instanceof ApiError ? e.message : "No pudimos cargar los planes.";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Elige tu plan \xB7 SPEI Scan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen px-4 sm:px-6 pt-28 pb-20"> <div class="max-w-5xl mx-auto"> <div class="mb-12 text-center"> <p class="eyebrow">Suscripción</p> <h1 class="display-h2 mt-3">Elige tu plan</h1> <p class="mt-4 text-white/55 text-base max-w-xl mx-auto">
Procesamos los pagos con Stripe. Puedes cambiar o cancelar cuando quieras.
</p> </div> ${error && renderTemplate`<div class="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200 max-w-2xl mx-auto"> ${error} </div>`} ${loadError && renderTemplate`<div class="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200 max-w-2xl mx-auto"> ${loadError} </div>`} <div class="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"> ${plans.map((plan) => {
    const isActive = status?.plan_slug === plan.slug && status?.subscribed;
    const isHighlighted = plan.slug === "business";
    return renderTemplate`<div${addAttribute(`relative rounded-2xl p-8 backdrop-blur-sm transition-colors ${isHighlighted ? "bg-brand-surface/80 border border-transparent" : "bg-brand-surface/60 border border-brand-line hover:border-white/15"}`, "class")}> ${isHighlighted && renderTemplate`<span aria-hidden="true" class="absolute inset-0 rounded-2xl pointer-events-none" style="background: linear-gradient(180deg, rgba(0,230,118,0.45) 0%, rgba(68,138,255,0.25) 30%, rgba(31,46,66,0.6) 70%); -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; padding: 1px;"></span>`} <h3 class="font-display font-medium text-xl text-white">${plan.name}</h3> <div class="mt-5 mb-7"> <div class="flex items-baseline gap-2"> <span class="font-display font-medium text-5xl tracking-tightest text-white">
$${plan.formatted_price} </span> <span class="font-mono text-sm text-white/40"> ${plan.currency.toUpperCase()} / ${plan.interval} </span> </div> <p class="mt-2 font-mono text-[11px] uppercase tracking-wider text-white/35"> ${plan.validation_limit} validaciones / mes
</p> </div> <ul class="space-y-3 mb-8"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-start gap-3 text-sm text-white/70"> <svg class="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-green" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"> <polyline points="4 11 8 15 16 6"></polyline> </svg> <span>${feature}</span> </li>`)} </ul> ${isActive ? renderTemplate`<div class="rounded-xl border border-brand-green/30 bg-brand-green/10 px-4 py-3 text-center text-sm text-brand-mint">
Plan activo
</div>` : renderTemplate`<form method="POST" action="/api/subscription/checkout"> <input type="hidden" name="plan_slug"${addAttribute(plan.slug, "value")}> <button type="submit"${addAttribute(`${isHighlighted ? "btn-primary" : "btn-ghost"} w-full`, "class")}> ${status?.subscribed ? `Cambiar a ${plan.name}` : `Suscribirme a ${plan.name}`} </button> </form>`} </div>`;
  })} </div> <p class="mt-10 text-center font-mono text-[11px] uppercase tracking-wider text-white/30">
Pagos con Stripe · Precios en MXN · Cancela cuando quieras
</p> <div class="mt-8 text-center"> <a href="/cuenta" class="text-sm text-white/45 hover:text-white/70">← Volver a mi cuenta</a> </div> </div> </section> ` })}`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/checkout.astro", void 0);

const $$file = "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/checkout.astro";
const $$url = "/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
