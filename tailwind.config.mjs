import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Locked two-color system: indigo + orange. Everything else is black/white/gray.
        ink: '#151515',
        indigo: {
          DEFAULT: '#281398',
          deep: '#1C0E6B',
          light: '#3D2FE0',
          tint: '#F0EDFB',
        },
        orange: {
          DEFAULT: '#FB961F',
          deep: '#E07D0A',
          light: '#FFC276',
          soft: '#FFF3E2',
        },
        slate: {
          DEFAULT: '#5C5C5C',
          light: '#8C8C8C',
        },
        paper: '#FFFFFF',
        line: '#ECEAF3',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Kept only so the not-yet-migrated pages (About, Insights, old pillar
        // pages) still render their existing font-mono labels correctly.
        // The new homepage never uses font-mono — see .mono-label utility instead.
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1320px',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        breathe: 'breathe 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
};
