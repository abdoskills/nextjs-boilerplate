// tailwind.config.ts

/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: Set dark mode to 'media' so it follows the user's OS setting
  darkMode: 'media', 
  content: [
    // ... your content paths ...
  ],
  theme: {
    extend: {
      // You can define custom colors here if needed, but for simplicity, 
      // we'll primarily use the default Tailwind classes.
    },
  },
  plugins: [],
}