/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#080B11",
          card: "#101622",
          cardHover: "#161F30",
          border: "rgba(255, 184, 0, 0.15)",
          gold: "#FFB800",
          goldGlow: "rgba(255, 184, 0, 0.35)",
          cyan: "#00F0FF",
          emerald: "#10B981",
          muted: "#94A3B8",
          text: "#F8FAFC",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(255, 184, 0, 0.08) 0%, rgba(0, 240, 255, 0.04) 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(255, 184, 0, 0.18) 0%, rgba(8, 11, 17, 0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
