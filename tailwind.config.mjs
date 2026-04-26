/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Acentos — coherencia con app Flutter (no cambiar)
          green:   '#00E676',
          blue:    '#448AFF',

          // Backgrounds — escala con más profundidad
          ink:     '#08111C', // base profunda (canvas global)
          bg:      '#0D1B2A', // canvas (legacy / app)
          surface: '#141F2E', // surface 1 (cards)
          raised:  '#1B2838', // surface 2 (hover, popovers)
          line:    '#1F2E42', // bordes sutiles

          // Tonos de apoyo para gradientes y highlights
          fog:     '#3A5775',
          mint:    '#7DFFC0',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'display':  '-0.03em',
      },
      boxShadow: {
        'glow-green': '0 0 0 1px rgba(0,230,118,0.4) inset, 0 12px 40px -12px rgba(0,230,118,0.45)',
        'glow-green-lg': '0 0 0 1px rgba(0,230,118,0.5) inset, 0 18px 60px -10px rgba(0,230,118,0.55)',
        'card':       '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'pulse-ring': {
          '0%':   { boxShadow: '0 0 0 0 rgba(0,230,118,0.55)' },
          '70%':  { boxShadow: '0 0 0 10px rgba(0,230,118,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0,230,118,0)' },
        },
        'tick-in': {
          '0%':   { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'tick-in':    'tick-in 400ms ease-out both',
        'shimmer':    'shimmer 6s linear infinite',
        'marquee':    'marquee 40s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
