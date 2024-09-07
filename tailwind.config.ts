import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "waves-1": "url(/waves_1.svg)",
        "shapes-1": "url(/shapes_1.svg)",
        "shapes-2": "url(/shapes_2.svg)",
        "lunares": "url(/svg/lunares.svg)",
        "abstract": "url(/svg/abstract.webp)",
        "leaves": "url(/svg/leaves.svg)",
        "pattern": "url(/svg/pattern.webp)",
        "circles": "url(/svg/circles_pattern.webp)"
      },
      colors: {
        "primary": "#9333EA",
        "primary-light": "#A759EE",
        "primary-lighter": "#BF85F3",
        "primary-dark": "#7E0FE3",
        "primary-darker": "#6506BB",
        "terciary": "#EE26BC",
        "terciary-light": "#F24FC9",
        "terciary-lighter": "#F57ED8",
        "terciary-dark": "#E900AF",
        "terciary-darker": "#C90097",
        "seconday": "#543FEB",
        "seconday-light": "#7463EF",
        "seconday-lighter": "#998DF4",
        "seconday-dark": "#341CE5",
        "seconday-darker": "#220CC0"
      },
      keyframes: {
        // Define los keyframes para la animación personalizada
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-25px)' },
          '50%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(25px)' },
          '100%': { transform: 'translateY(0)' },
        },
        "float2": {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-25px)' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(25px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        // Define la animación personalizada
        'float': 'float 5s ease-in-out infinite',
        'float-horizontal': 'float2 5s ease-in-out infinite',
        'pulse-slow': 'pulse 5s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
