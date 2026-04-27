/* empty css                                      */
import { d as createComponent, m as maybeRenderHead, f as addAttribute, e as renderTemplate, r as renderComponent, c as createAstro, F as Fragment } from '../chunks/astro/server_D58YaVmd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BP4TqvQF.mjs';
import 'clsx';
import { a as apiFetch, A as ApiError } from '../chunks/api_DglEuhCB.mjs';
export { renderers } from '../renderers.mjs';

const $$ReceiptMockup = createComponent(($$result, $$props, $$slots) => {
  const fields = [
    { label: "Beneficiario", value: "\u25CF\u25CF\u25CF\u25CF Garc\xEDa Ram\xEDrez", delay: 120 },
    { label: "Banco origen", value: "BBVA M\xE9xico", delay: 200 },
    { label: "Monto", value: "$ 12,450.00 MXN", delay: 280 },
    { label: "Clave rastreo", value: "BNET01001-7A29B43F", delay: 360 },
    { label: "Fecha", value: "24 abr 2026 \xB7 14:08", delay: 440 }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full max-w-md mx-auto lg:mx-0" data-receipt-mockup> <!-- Card fantasma detrás (efecto profundidad) --> <div aria-hidden="true" class="absolute inset-0 translate-x-5 translate-y-5 rounded-2xl border border-brand-line bg-brand-surface/40 opacity-60"></div> <!-- Card principal --> <article class="relative rounded-2xl border border-brand-line bg-brand-surface/90 backdrop-blur-md shadow-card overflow-hidden rotate-[0.6deg]"> <!-- Title bar estilo macOS --> <header class="flex items-center gap-2 px-4 py-3 border-b border-brand-line bg-brand-raised/40"> <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span> <span class="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span> <span class="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span> <span class="ml-3 font-mono text-[11px] text-white/40 truncate">
comprobante-bbva-2026-04.jpg
</span> </header> <!-- Imagen placeholder --> <div class="px-4 pt-4"> <div class="relative h-28 rounded-lg border border-brand-line overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-brand-fog/30 via-brand-bg to-brand-ink"></div> <div class="absolute inset-0 bg-grid opacity-50"></div> <div class="absolute inset-0 flex items-center justify-center"> <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="text-white/30"> <rect x="4" y="3" width="16" height="18" rx="2"></rect> <line x1="8" y1="8" x2="16" y2="8"></line> <line x1="8" y1="12" x2="16" y2="12"></line> <line x1="8" y1="16" x2="13" y2="16"></line> </svg> </div> <span class="absolute top-2 left-2 font-mono text-[10px] text-white/40 px-1.5 py-0.5 rounded bg-black/30 border border-white/10">
IMG · 2.1 MB
</span> </div> </div> <!-- Campos extraídos --> <ul class="px-4 py-4 space-y-2.5"> ${fields.map((f) => renderTemplate`<li class="flex items-baseline justify-between gap-3 opacity-0"${addAttribute(`animation: tick-in 400ms ease-out ${f.delay}ms forwards;`, "style")}> <span class="font-mono text-[11px] uppercase tracking-wider text-white/40">${f.label}</span> <span class="font-mono text-sm text-white/90 truncate">${f.value}</span> </li>`)} </ul> <!-- Separador --> <div class="mx-4 h-px bg-brand-line"></div> <!-- Sello verificado --> <footer class="flex items-center justify-between gap-3 px-4 py-4 opacity-0" style="animation: tick-in 500ms ease-out 600ms forwards;"> <div class="flex items-center gap-3"> <span class="relative flex items-center justify-center w-8 h-8 rounded-full bg-brand-green/15 text-brand-green animate-pulse-ring"> <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </span> <div class="flex flex-col leading-tight"> <span class="text-sm text-white">Verificado en Banxico</span> <span class="font-mono text-[11px] text-white/40">CEP confirmado · 1.24s</span> </div> </div> <span class="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border border-brand-green/30 text-brand-green bg-brand-green/5">
CEP ✓
</span> </footer> </article> </div>`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/components/ReceiptMockup.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative pt-28 sm:pt-32 pb-20 md:pb-28 overflow-hidden"> <div class="relative max-w-6xl mx-auto px-4 sm:px-6"> <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"> <!-- Columna izquierda — copy --> <div class="lg:col-span-7"> <!-- Headline --> <h1 class="display-h1 text-balance">
Confirma transferencias<br class="hidden sm:block"> <span class="text-brand-green">sin dudas.</span> </h1> <!-- Subtitle --> <p class="mt-6 text-lg text-white/55 max-w-xl text-pretty leading-relaxed">
Detectamos comprobantes SPEI alterados con IA y los confirmamos en tiempo real
          contra el portal oficial de Banxico. En menos de dos segundos.
</p> <!-- CTAs --> <div class="mt-9 flex flex-col sm:flex-row gap-3"> <a href="#precios" class="btn-primary">
Probar gratis
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="5" y1="12" x2="19" y2="12"></line> <polyline points="12 5 19 12 12 19"></polyline> </svg> </a> <a href="#como-funciona" class="btn-ghost">
Ver cómo funciona
</a> </div> <!-- Trust row --> <div class="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[12px] text-white/40"> <span class="flex items-center gap-2"> <span class="w-1 h-1 rounded-full bg-white/30"></span>
+18 bancos soportados
</span> <span class="flex items-center gap-2"> <span class="w-1 h-1 rounded-full bg-white/30"></span>
OCR con Gemini Vision
</span> <span class="flex items-center gap-2"> <span class="w-1 h-1 rounded-full bg-white/30"></span>
&lt; 15s en promedio
</span> </div> </div> <!-- Columna derecha — mockup --> <div class="lg:col-span-5"> ${renderComponent($$result, "ReceiptMockup", $$ReceiptMockup, {})} </div> </div> </div> </section>`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/components/Hero.astro", void 0);

const $$BancosSoportados = createComponent(($$result, $$props, $$slots) => {
  const bancos = [
    "BBVA",
    "Banorte",
    "Santander",
    "HSBC",
    "Citibanamex",
    "Scotiabank",
    "Inbursa",
    "Banco Azteca",
    "BanRegio",
    "Banco del Baj\xEDo",
    "Mifel",
    "Afirme",
    "Hey Banco",
    "Nu",
    "Klar",
    "STP",
    "Banco Multiva",
    "BanCoppel"
  ];
  const loop = [...bancos, ...bancos];
  return renderTemplate`${maybeRenderHead()}<section id="bancos" class="relative py-16 sm:py-20 border-y border-brand-line/60 bg-brand-ink/40"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8"> <p class="eyebrow">Bancos soportados</p> <p class="font-mono text-[12px] text-white/45">
+18 instituciones · cobertura SPEI completa
</p> </div> <!-- Marquee --> <div class="relative overflow-hidden" style="-webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%); mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);"> <ul class="flex items-center gap-10 whitespace-nowrap animate-marquee" style="width: max-content;"> ${loop.map((banco) => renderTemplate`<li class="font-display text-xl sm:text-2xl text-white/45 hover:text-white/80 transition-colors tracking-tight"> ${banco} </li>`)} </ul> </div> </div> </section>`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/components/BancosSoportados.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="como-funciona" class="relative py-24 sm:py-32"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <!-- Header --> <div class="max-w-2xl mb-14"> <p class="eyebrow">Cómo funciona · 3 pasos</p> <h2 class="display-h2 mt-3 text-balance">
De foto borrosa a confirmación oficial.
</h2> <p class="mt-4 text-white/55 text-lg max-w-xl">
Sin formularios. Sin esperas. Sin adivinar si el comprobante es legítimo.
</p> </div> <!-- Bento --> <div class="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5 auto-rows-fr"> <!-- Paso 1 — grande (col-span-3) --> <article class="card md:col-span-3 p-7 sm:p-9 flex flex-col"> <div class="flex items-center gap-3 mb-6"> <span class="font-mono text-xs text-white/30">01</span> <span class="h-px flex-1 bg-brand-line"></span> </div> <h3 class="font-display font-medium text-2xl text-white">Sube tu comprobante</h3> <p class="mt-3 text-white/55 leading-relaxed">
Toma una foto o arrastra el archivo. PDFs, capturas, fotos torcidas — todo entra.
</p> <!-- Drop-zone visual --> <div class="mt-7 flex-1 min-h-[160px] rounded-xl border border-dashed border-brand-line/80 bg-brand-ink/40 flex flex-col items-center justify-center gap-3 p-6 text-center"> <div class="w-12 h-12 rounded-xl bg-white/[0.04] border border-brand-line flex items-center justify-center text-white/50"> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5"></path> <path d="M7.5 7.5L12 3l4.5 4.5"></path> <path d="M12 3v13.5"></path> </svg> </div> <p class="font-mono text-[11px] uppercase tracking-wider text-white/40">
Arrastra · JPG · PNG · PDF
</p> </div> </article> <!-- Paso 2 --> <article class="card md:col-span-3 p-7 sm:p-9 flex flex-col"> <div class="flex items-center gap-3 mb-6"> <span class="font-mono text-xs text-white/30">02</span> <span class="h-px flex-1 bg-brand-line"></span> </div> <h3 class="font-display font-medium text-2xl text-white">La IA extrae los campos</h3> <p class="mt-3 text-white/55 leading-relaxed">
Gemini Vision lee monto, banco, clave de rastreo y fecha — y detecta alteraciones sutiles.
</p> <!-- Mini lista de campos extraídos --> <ul class="mt-7 space-y-2 font-mono text-[12px]"> <li class="flex justify-between"><span class="text-white/40">monto</span><span class="text-white/85">$ 12,450.00</span></li> <li class="flex justify-between"><span class="text-white/40">banco</span><span class="text-white/85">BBVA México</span></li> <li class="flex justify-between"><span class="text-white/40">clave</span><span class="text-white/85">7A29B43F</span></li> <li class="flex justify-between"><span class="text-white/40">fecha</span><span class="text-white/85">24 abr · 14:08</span></li> </ul> </article> <!-- Paso 3 — full width --> <article class="card md:col-span-6 p-7 sm:p-9 flex flex-col md:flex-row md:items-stretch gap-8"> <div class="flex-1"> <div class="flex items-center gap-3 mb-6"> <span class="font-mono text-xs text-white/30">03</span> <span class="h-px flex-1 bg-brand-line"></span> </div> <h3 class="font-display font-medium text-2xl text-white">Banxico confirma en segundos</h3> <p class="mt-3 text-white/55 leading-relaxed max-w-md">
Consultamos el portal CEP de Banxico en tiempo real para confirmar que la
            transferencia existe en el registro oficial. Recibes un veredicto verificable.
</p> <div class="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-green/25 bg-brand-green/[0.06]"> <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" class="text-brand-green"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="font-mono text-[11px] uppercase tracking-wider text-brand-green/90">CEP confirmado</span> </div> </div> <!-- Mini gráfico de tiempos de respuesta --> <div class="md:w-72 lg:w-80 flex flex-col"> <div class="flex items-center justify-between mb-3 font-mono text-[11px] uppercase tracking-wider text-white/40"> <span>Tiempo de verificación</span> <span class="text-white/60">avg 1.2s</span> </div> <div class="flex-1 flex items-end gap-1.5 min-h-[100px]"> ${[42, 58, 31, 72, 48, 35, 90, 55, 40, 64, 29, 70].map((h) => renderTemplate`<span class="flex-1 rounded-sm bg-gradient-to-t from-brand-green/20 to-brand-green/70"${addAttribute(`height: ${h}%`, "style")}></span>`)} </div> <div class="mt-3 flex justify-between font-mono text-[10px] text-white/30"> <span>0s</span> <span>2s</span> </div> </div> </article> </div> </div> </section>`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/components/HowItWorks.astro", void 0);

const $$Astro = createAstro("https://speivalidator.com");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  let plans = [];
  let loadError = null;
  try {
    plans = await apiFetch("/plans");
  } catch (e) {
    loadError = e instanceof ApiError ? e.message : "No pudimos cargar los planes.";
  }
  const isLoggedIn = !!Astro2.locals.user;
  const ctaHref = isLoggedIn ? "/checkout" : "/registro?return_to=%2Fcheckout";
  return renderTemplate`${maybeRenderHead()}<section id="precios" class="relative py-24 sm:py-32"> <div class="max-w-6xl mx-auto px-4 sm:px-6"> <!-- Header --> <div class="max-w-2xl mb-14"> <p class="eyebrow">Precios</p> <h2 class="display-h2 mt-3 text-balance">
Paga lo que validas. Sin sorpresas.
</h2> <p class="mt-4 text-white/55 text-lg">
Planes mensuales. Sin compromiso anual. Cancela cuando quieras.
</p> </div> ${loadError && renderTemplate`<div class="mb-6 max-w-2xl rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"> ${loadError} </div>`} <!-- Cards --> <div class="grid md:grid-cols-2 gap-5 max-w-4xl"> ${plans.map((plan) => {
    const highlighted = plan.slug === "business";
    return renderTemplate`<div${addAttribute(`relative rounded-2xl p-8 sm:p-9 backdrop-blur-sm transition-colors ${highlighted ? "bg-brand-surface/80 border border-transparent" : "bg-brand-surface/60 border border-brand-line hover:border-white/15"}`, "class")}> ${highlighted && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <span aria-hidden="true" class="absolute inset-0 rounded-2xl pointer-events-none" style="background: linear-gradient(180deg, rgba(0,230,118,0.45) 0%, rgba(68,138,255,0.25) 30%, rgba(31,46,66,0.6) 70%); -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; padding: 1px;"></span> <span class="absolute -top-3 left-8 font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-md border border-brand-green/40 bg-brand-ink text-brand-green">
Recomendado
</span> ` })}`} <div class="mb-7"> <h3 class="font-display font-medium text-xl text-white">${plan.name}</h3> <p class="mt-2 text-white/50 text-sm leading-relaxed"> ${plan.validation_limit} validaciones SPEI cada mes con verificación oficial.
</p> </div> <div class="mb-8"> <div class="flex items-baseline gap-2"> <span class="font-display font-medium text-6xl tracking-tightest text-white">
$${plan.formatted_price} </span> <span class="font-mono text-sm text-white/40"> ${plan.currency.toUpperCase()} / ${plan.interval} </span> </div> <p class="mt-2 font-mono text-[11px] uppercase tracking-wider text-white/35"> ${plan.validation_limit} validaciones / mes
</p> </div> <ul class="space-y-3 mb-9"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-start gap-3 text-sm text-white/70"> <svg class="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-green" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"> <polyline points="4 11 8 15 16 6"></polyline> </svg> <span>${feature}</span> </li>`)} </ul> <a${addAttribute(ctaHref, "href")}${addAttribute(`${highlighted ? "btn-primary" : "btn-ghost"} w-full`, "class")}>
Comenzar con ${plan.name} </a> </div>`;
  })} </div> <p class="mt-10 font-mono text-[11px] uppercase tracking-wider text-white/30">
Pagos con Stripe · Precios en MXN · Sin costos ocultos
</p> </div> </section>`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/components/Pricing.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      q: "\xBFC\xF3mo verifica el sistema con Banxico?",
      a: "Consultamos en tiempo real el portal CEP (Comprobante Electr\xF3nico de Pago) oficial de Banxico usando los datos extra\xEDdos del comprobante. Si el SPEI existe en el registro de Banxico, devolvemos una confirmaci\xF3n verificable."
    },
    {
      q: "\xBFQu\xE9 bancos est\xE1n soportados?",
      a: "Soportamos +18 bancos mexicanos, incluyendo BBVA, Banorte, Santander, HSBC, Citibanamex, Scotiabank, Inbursa, Banco Azteca, Hey Banco, Nu, Klar y muchos m\xE1s. La cobertura de Banxico es para todas las transferencias SPEI."
    },
    {
      q: "\xBFMis comprobantes se almacenan?",
      a: "Solo guardamos el resultado de la verificaci\xF3n y los metadatos necesarios para tu historial. Las im\xE1genes pueden eliminarse a petici\xF3n y todo viaja cifrado."
    },
    {
      q: "\xBFFunciona si el comprobante es una foto borrosa o torcida?",
      a: "S\xED. El OCR est\xE1 construido sobre Gemini Vision, que maneja fotos torcidas, oscuras, parcialmente cortadas o con compresi\xF3n fuerte. Si un dato no se logra leer, te lo decimos antes de consultar Banxico."
    },
    {
      q: "\xBFTienen API para integrar con mi sistema?",
      a: "La API est\xE1 en plan piloto privado para clientes Business. Si te interesa, escr\xEDbenos a soporte@speivalidator.com y te incluimos en la siguiente ola."
    },
    {
      q: "\xBFC\xF3mo cancelo mi suscripci\xF3n?",
      a: "Desde la app, en cualquier momento. La cancelaci\xF3n es inmediata y no genera cargos adicionales. Mantienes acceso hasta el final del per\xEDodo pagado."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="preguntas" class="relative py-24 sm:py-32"> <div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="mb-12"> <p class="eyebrow">Preguntas frecuentes</p> <h2 class="display-h2 mt-3 text-balance">
Lo que la gente nos pregunta antes de subirse.
</h2> </div> <div class="divide-y divide-brand-line border-y border-brand-line"> ${faqs.map((faq) => renderTemplate`<details class="group py-5"> <summary class="flex items-center justify-between gap-6 cursor-pointer list-none select-none"> <span class="font-display font-medium text-lg sm:text-xl text-white"> ${faq.q} </span> <span aria-hidden="true" class="flex-shrink-0 w-7 h-7 rounded-full border border-brand-line bg-white/[0.02] flex items-center justify-center text-white/60 transition-transform duration-200 group-open:rotate-45 group-open:text-brand-green group-open:border-brand-green/40"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"> <line x1="12" y1="5" x2="12" y2="19"></line> <line x1="5" y1="12" x2="19" y2="12"></line> </svg> </span> </summary> <p class="mt-4 text-white/60 leading-relaxed text-[15px] max-w-prose"> ${faq.a} </p> </details>`)} </div> </div> </section>`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/components/FAQ.astro", void 0);

const $$CtaFinal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative py-24 sm:py-32"> <div class="max-w-4xl mx-auto px-4 sm:px-6"> <div class="relative rounded-3xl border border-brand-line bg-brand-surface/60 backdrop-blur-md overflow-hidden"> <!-- Glow interno --> <div aria-hidden="true" class="absolute inset-0 pointer-events-none"> <div class="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[80%] h-[120%] rounded-full" style="background: radial-gradient(closest-side, rgba(0,230,118,0.15), transparent 70%);"></div> <div class="absolute inset-0 bg-grid opacity-60"></div> </div> <div class="relative px-6 sm:px-12 py-16 sm:py-20 text-center"> <p class="eyebrow">Empieza ya</p> <h2 class="display-h2 mt-3 text-balance max-w-2xl mx-auto">
Tu próximo SPEI, verificado en 30 segundos.
</h2> <p class="mt-5 text-white/55 text-lg max-w-xl mx-auto">
Descarga la app y prueba tu primera validación gratis. Sin tarjeta.
</p> <!-- Stores --> <div class="mt-9 flex flex-col sm:flex-row gap-3 justify-center"> <a href="#" class="btn-primary" aria-label="Descargar en App Store"> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"> <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path> </svg>
App Store
</a> <a href="#" class="btn-ghost" aria-label="Descargar en Google Play"> <svg width="18" height="18" viewBox="0 0 24 24"> <path fill="#4CAF50" d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5z"></path> <path fill="#FBBC04" d="M6.05 2.66L16.81 8.88 14.54 11.15z"></path> <path fill="#EA4335" d="M20.16 10.81C20.5 11.08 20.75 11.46 20.75 12 20.75 12.53 20.5 12.9 20.16 13.19L17.89 14.5 15.39 12 17.89 9.5z"></path> <path fill="#4285F4" d="M16.81 15.12L6.05 21.34 14.54 12.85z"></path> </svg>
Google Play
</a> </div> <p class="mt-6 font-mono text-[12px] uppercase tracking-wider text-white/30">
¿Dudas? <a href="mailto:soporte@speivalidator.com" class="text-white/55 hover:text-white">soporte@speivalidator.com</a> </p> </div> </div> </div> </section>`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/components/CtaFinal.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SPEI Scan \u2014 Confirma transferencias SPEI sin dudas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "BancosSoportados", $$BancosSoportados, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "CtaFinal", $$CtaFinal, {})} ` })}`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/index.astro", void 0);

const $$file = "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
