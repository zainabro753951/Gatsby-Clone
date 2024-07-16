/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily : {
      themeFont: ['Inter', 'sans-serif']
    },
    extend: {
      colors : {
        themePurple: '#663399',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "cloud-gradient": 'linear-gradient(to top, #F5EEFB, #F4FCFF)',
          "cloud-h1": 'linear-gradient(to top, #5F3B9F, #3863C2)'
      },
    },
  },
  plugins: [],
};
