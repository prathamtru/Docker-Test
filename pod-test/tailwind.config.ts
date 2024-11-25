import type { Config } from "tailwindcss";

export default {
  prefix: "ui-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': {'max': '768px'},
        'sm': {'max': '414px'},
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightgray: '#DCDCDC',
      },
      boxShadow: {
        lightGray: "0 0 4px 0 rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        large: '12px',
      },
      fontFamily: {
        poppinsRegular: ['Poppins-Regular'], 
        poppinsBold: ['Poppins-Bold'], 
        MontserratExtraBold: ['Montserrat-ExtraBold'], 
      },
    },
  },
  plugins: [],
} satisfies Config;
