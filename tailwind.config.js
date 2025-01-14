const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ["Abel", "sans-serif"],
        'source': ["Source Sans 3", "sans-serif"],
        'poppins':["Poppins", "sans-serif"]
      }
    },
    colors: {
      primary: "#3164f4",
      secondary:"#EAF1FF"
    },
    
    screens: {
      'sm': '360px',
      'md': '720px',
      'lg': '960px',
      'xl': '1440px',
      's-md': { min: '360px', max: '719px' },
    },
    backgroundImage: {
      login:"url('./src/assets/wallpaper.png')"
    }
  
    
  },
  plugins: [],
});