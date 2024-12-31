/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-desktop': "url('/images/bg-intro-desktop.svg')",
        'hero-pattern-mobile': "url('/images/bg-intro-mobile.svg')",
      },
      colors: {
        //Primary 
        'Dark-Blue': 'hsl(233, 26%, 24%)',
        'Lime-Green': 'hsl(136, 65%, 51%)',
        'Bright-Cyan': 'hsl(192, 70%, 51%)',
        // Neur=tral
        'Grayish-Blue': 'hsl(233, 8%, 62%)',
        'Light-Grayish-Blue': 'hsl(220, 16%, 96%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}

