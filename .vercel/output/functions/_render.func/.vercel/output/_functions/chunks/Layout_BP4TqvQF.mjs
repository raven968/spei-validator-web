import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, e as renderTemplate, r as renderComponent, F as Fragment, g as renderHead, h as renderSlot } from './astro/server_D58YaVmd.mjs';
import 'kleur/colors';
/* empty css                              */
import 'clsx';

const $$Astro$1 = createAstro("https://speivalidator.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const navLinks = [
    { href: "/#como-funciona", label: "C\xF3mo funciona" },
    { href: "/#precios", label: "Precios" },
    { href: "/#preguntas", label: "Preguntas" }
  ];
  const user = Astro2.locals.user;
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-[border-color,background-color] duration-200 border-b border-transparent"> <div class="absolute inset-0 -z-10 bg-brand-ink/70 backdrop-blur-md"></div> <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"> <!-- Wordmark --> <a href="/" class="flex items-center gap-2.5 group"> <img src="/logo.png" alt="" class="h-7 w-auto"> <span class="font-display font-medium text-[17px] tracking-tight text-white">
SPEI Scan<span class="text-brand-green">.</span> </span> </a> <!-- Desktop nav --> <nav class="hidden md:flex items-center gap-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-sm text-white/55 hover:text-white transition-colors"> ${link.label} </a>`)} ${user ? renderTemplate`<a href="/cuenta" class="text-sm font-medium text-white/85 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-colors">
Mi cuenta
</a>` : renderTemplate`<div class="flex items-center gap-3"> <a href="/login" class="text-sm text-white/55 hover:text-white transition-colors">
Iniciar sesión
</a> <a href="/registro" class="text-sm font-medium text-white/85 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-colors">
Crear cuenta
</a> </div>`} </nav> <!-- Mobile menu button --> <button id="menu-btn" class="md:hidden p-2 -mr-2 text-white/70 hover:text-white" aria-label="Abrir menú" aria-expanded="false"> <svg id="icon-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"> <line x1="4" y1="7" x2="20" y2="7"></line> <line x1="4" y1="13" x2="20" y2="13"></line> <line x1="4" y1="19" x2="20" y2="19"></line> </svg> <svg id="icon-close" class="hidden" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"> <line x1="6" y1="6" x2="18" y2="18"></line> <line x1="18" y1="6" x2="6" y2="18"></line> </svg> </button> </div> <!-- Mobile fullscreen overlay --> <div id="mobile-menu" class="hidden md:hidden fixed inset-0 top-16 bg-brand-ink/95 backdrop-blur-xl"> <nav class="flex flex-col gap-1 px-6 pt-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="block py-4 text-2xl font-display font-medium text-white border-b border-brand-line"> ${link.label} </a>`)} ${user ? renderTemplate`<a href="/cuenta" class="mt-8 btn-primary w-full">Mi cuenta</a>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="/login" class="mt-8 btn-ghost w-full">Iniciar sesión</a> <a href="/registro" class="mt-3 btn-primary w-full">Crear cuenta</a> ` })}`} </nav> </div> </header> `;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const cols = [
    {
      title: "Producto",
      links: [
        { href: "/#como-funciona", label: "C\xF3mo funciona" },
        { href: "/#bancos", label: "Bancos soportados" },
        { href: "/#precios", label: "Precios" },
        { href: "/#preguntas", label: "Preguntas frecuentes" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { href: "mailto:soporte@speivalidator.com", label: "Contacto" }
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "/terminos", label: "T\xE9rminos y Condiciones" },
        { href: "/privacidad", label: "Pol\xEDtica de Privacidad" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative mt-24 border-t border-brand-line"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16"> <div class="grid grid-cols-2 md:grid-cols-4 gap-10"> <!-- Wordmark + tagline --> <div class="col-span-2 md:col-span-1"> <a href="/" class="flex items-center gap-2.5"> <img src="/logo.png" alt="" class="h-7 w-auto"> <span class="font-display font-medium text-[17px] tracking-tight text-white">
SPEI Scan<span class="text-brand-green">.</span> </span> </a> <p class="mt-4 text-sm text-white/45 max-w-[16rem] leading-relaxed">
Confirma transferencias SPEI sin dudas, con verificación oficial de Banxico.
</p> </div> ${cols.map((col) => renderTemplate`<div> <h4 class="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35 mb-4"> ${col.title} </h4> <ul class="space-y-2.5"> ${col.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-white/65 hover:text-white transition-colors"> ${link.label} </a> </li>`)} </ul> </div>`)} </div> <!-- Línea inferior --> <div class="mt-14 pt-6 border-t border-brand-line flex flex-col-reverse sm:flex-row items-center justify-between gap-4"> <p class="font-mono text-[11px] text-white/30">
© ${year} SPEI Scan · Hecho en México
</p> <div class="flex items-center gap-2 font-mono text-[11px] text-white/30"> <span class="w-1.5 h-1.5 rounded-full bg-brand-green/70"></span>
Servicio operativo
</div> </div> </div> </footer>`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://speivalidator.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Valida comprobantes SPEI en segundos con IA y verificaci\xF3n oficial en tiempo real con Banxico. Protege tu negocio de fraudes."
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#08111C"><link rel="icon" type="image/png" href="/logo.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><title>${title}</title><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url" content="https://speivalidator.com"><meta property="og:image" content="https://speivalidator.com/logo.png"><meta name="twitter:card" content="summary_large_image">${renderHead()}</head> <body class="relative min-h-screen overflow-x-hidden"> <!-- Capas decorativas globales --> <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10"> <div class="absolute inset-0 bg-grid"></div> <div class="absolute inset-0 glow-tr"></div> <div class="absolute inset-0 glow-bl"></div> <div class="absolute inset-0 bg-noise"></div> </div> ${renderComponent($$result, "Header", $$Header, {})} <main class="relative"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/aronjimenez/Desktop/projects/spei-validator-project/spei-validator-web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
