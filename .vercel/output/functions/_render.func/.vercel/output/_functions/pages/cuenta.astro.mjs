/* empty css                                      */
import { c as createAstro, d as createComponent, r as renderComponent, e as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_D58YaVmd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BP4TqvQF.mjs';
import { a as apiFetch, A as ApiError } from '../chunks/api_DglEuhCB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://speivalidator.com");
const $$Cuenta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cuenta;
  const user = Astro2.locals.user;
  const token = Astro2.locals.sessionToken;
  const error = Astro2.url.searchParams.get("error");
  const notice = Astro2.url.searchParams.get("notice");
  let status = null;
  let activePlan = null;
  let loadError = null;
  try {
    status = await apiFetch("/subscription/status", { token });
    if (status.plan_slug) {
      const plans = await apiFetch("/plans");
      activePlan = plans.find((p) => p.slug === status.plan_slug) ?? null;
    }
  } catch (e) {
    loadError = e instanceof ApiError ? e.message : "No pudimos cargar tu suscripci\xF3n.";
  }
  const usagePct = status?.validations_used != null && status.validation_limit ? Math.min(100, Math.round(status.validations_used / status.validation_limit * 100)) : 0;
  const noticeMessages = {
    cancelled: "Tu suscripci\xF3n se cancel\xF3. Sigue activa hasta el final del per\xEDodo actual.",
    resumed: "Tu suscripci\xF3n fue reanudada."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi cuenta \xB7 SPEI Scan" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen px-4 sm:px-6 pt-28 pb-20"> <div class="max-w-3xl mx-auto"> <div class="mb-10 flex items-start justify-between gap-4 flex-wrap"> <div> <p class="eyebrow">Mi cuenta</p> <h1 class="display-h2 mt-2">Hola, ${user.name}</h1> <p class="mt-2 text-white/55 text-sm">${user.email}</p> </div> <form method="POST" action="/api/logout"> <button type="submit" class="btn-ghost text-sm">Cerrar sesión</button> </form> </div> ${error && renderTemplate`<div class="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"> ${error} </div>`} ${notice && noticeMessages[notice] && renderTemplate`<div class="mb-6 rounded-lg border border-brand-green/30 bg-brand-green/10 px-4 py-3 text-sm text-brand-mint"> ${noticeMessages[notice]} </div>`} ${loadError && renderTemplate`<div class="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"> ${loadError} </div>`} ${status?.subscribed ? renderTemplate`<div class="card p-7"> <div class="flex items-start justify-between gap-4 flex-wrap mb-6"> <div> <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green"> ${status.cancelled ? "Cancelada \xB7 sigue activa" : "Plan activo"} </p> <h2 class="font-display text-3xl text-white mt-2"> ${activePlan?.name ?? "Tu plan"} </h2> ${activePlan && renderTemplate`<p class="text-white/55 text-sm mt-1">
$${activePlan.formatted_price} ${activePlan.currency.toUpperCase()} / ${activePlan.interval} </p>`} </div> ${status.ends_at && status.cancelled && renderTemplate`<p class="text-xs text-white/45 font-mono">
Acceso hasta: ${status.ends_at.split("T")[0]} </p>`} </div> ${status.validation_limit != null && renderTemplate`<div class="mb-7"> <div class="flex items-baseline justify-between mb-2"> <span class="text-xs font-mono uppercase tracking-wider text-white/40">
Validaciones este ciclo
</span> <span class="text-sm text-white/70 font-mono"> ${status.validations_used ?? 0} / ${status.validation_limit} </span> </div> <div class="h-2 rounded-full bg-brand-line overflow-hidden"> <div class="h-full bg-brand-green transition-all"${addAttribute(`width: ${usagePct}%`, "style")}></div> </div> </div>`} <div class="grid sm:grid-cols-2 gap-3"> <a href="/checkout" class="btn-ghost w-full">Cambiar plan</a> <form method="POST" action="/api/subscription/portal"> <button type="submit" class="btn-ghost w-full">Métodos de pago e historial</button> </form> ${status.cancelled ? renderTemplate`<form method="POST" action="/api/subscription/resume" class="sm:col-span-2"> <button type="submit" class="btn-primary w-full">Reanudar suscripción</button> </form>` : renderTemplate`<form method="POST" action="/api/subscription/cancel" class="sm:col-span-2" onsubmit="return confirm('¿Seguro que quieres cancelar? Mantendrás acceso hasta el final del período actual.')"> <button type="submit" class="btn-ghost w-full text-red-300/85 hover:text-red-200">
Cancelar suscripción
</button> </form>`} </div> </div>` : renderTemplate`<div class="card p-9 text-center"> <h2 class="font-display text-2xl text-white">No tienes una suscripción activa</h2> <p class="text-white/55 text-sm mt-3 max-w-md mx-auto">
Elige un plan para empezar a validar comprobantes SPEI con IA y verificación oficial de Banxico.
</p> <a href="/checkout" class="btn-primary mt-7 inline-flex">Ver planes</a> </div>`} </div> </section> ` })}`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/cuenta.astro", void 0);

const $$file = "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/cuenta.astro";
const $$url = "/cuenta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cuenta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
