/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#6B3CC9',
        'seconcolor' : '#F28D35',
        'analogous1' : '#6A44F2',
        'analogous2' : '#1CBDDD',
        'barkGeen' : '#4DCA79',
        'barkgren2':'#78BF91'
      },
      screens:{
        'sm' : '320px',
        'md' : '700px'
      }
    },
  },
  plugins: [],
}

