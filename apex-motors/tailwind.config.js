/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'apex-black': '#12141a',
        'apex-blue': '#0a90ff',
        'apex-green': '#2bb673',
        'background': 'hsl(220, 14%, 8%)',
        'foreground': 'hsl(210, 16%, 95%)',
        'primary': 'hsl(206, 100%, 52%)',
        'primary-foreground': 'hsl(0, 0%, 100%)',
        'muted-foreground': 'hsl(215, 10%, 58%)',
        'border': 'hsl(220, 12%, 20%)',
        'card': 'hsl(220, 13%, 12%)',
        'card-elevated': 'hsl(220, 12%, 16%)',
        'success': 'hsl(152, 62%, 44%)',
      },
    },
  },
  plugins: [],
}
