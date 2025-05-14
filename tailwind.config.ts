import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    fontFamily: {
      display: ['var(--font-display)'],
      body: ['var(--font-body)'],
      merienda: ['var(--font-merienda)'],
      cormorant_upright: ['var(--font-cormorant_upright)'],
      open_sans: ['var(--font-open_sans)'],
      poppins: ['var(--font-poppins)'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        custom: {
          white: "hsl(166, 100%, 99%)",
          green: "hsl(166, 95%, 15%)",
          darkGreen: "#15803d",
        },
        coffee: {
          DEFAULT: '#4E342E', // Main coffee color | Background or Heading or Title
          beige: '#f5d8b7', // Beige shade | Card background
          caramel: '#bd7a38', // Caramel shade | Button
          bright: '#fcf3e8', // Bright | Text light Button
          charcoal: '#333333', // Charcoal for dark elements | Text
        },
        dark: {
          background: '#1C1B1A', // Dark background
          text: '#F5F5F5', // Light text for contrast
          accent: '#C49A6C', // Accent color (caramel in dark mode)
          highlight: '#f5d8b7', // Highlight (orange in dark mode)
        },
      },
      clipPath: {
        'circle-top': 'inset(50% 0 0 0)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config