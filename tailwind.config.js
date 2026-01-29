// tailwind.config.js or tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add custom colors
      colors: {
        'custom-blue': '#1fb6ff',
        'custom-purple': '#7e5bef',
        // Add more custom colors as needed
      },
      // Add custom font families
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
      // Add custom spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Add custom padding sizes
      padding: {
        '18': '410.5rem',
        '22': '5.5rem',
      },
      // Add custom breakpoints
      screens: {
        'xs': '475px',
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}