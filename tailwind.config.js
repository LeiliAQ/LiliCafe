/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "brown":{
          100:"#ece0d1",
          300:"#dbc1ac",
          500:"#967259",
          900:"#634832",
        },
      },
      boxShadow:{
        "shadow-custom":"0px 1px 10px rgba(0,0,0,0.05)",
      },
      borderRadius:{
        "radius-custom":"2rem",
      },
      fontFamily:{
        Dana:["Montserrat","sans-serif"],
        DanaMedium:["MontserratMedium","sans-serif"],
        DanaDemiBold:["MontserratSemiBold","sans-serif"],
        MorabbaLight: ['PlayfairLight', 'serif'],
        MorabbaMedium: ['PlayfairMedium', 'serif'],
        MorabbaBold: ['PlayfairBold', 'serif'],
        // Montserrat:['Montserrat'],
        // Playfair:['Playfair'],
      }
    },
  },
  plugins: [],
}

