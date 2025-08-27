import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'void-black': '#0D0D0D',
        'signal-gold': '#FFB600',
        'tiffany-blue': '#0ABAB5',
        'data-blue': '#009EFF',
        'quantum-white': '#F5F5F5',
        'neutral-gray': '#CCCCCC',
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.025em',
        'wider': '0.05em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slideInUp': 'slideInUp 0.5s ease-out',
        'fadeIn': 'fadeIn 0.5s ease-out',
        'scroll': 'scroll 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(10, 186, 181, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(10, 186, 181, 0.6)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config;
