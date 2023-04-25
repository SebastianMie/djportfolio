module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
      extend: {
        typography: {},
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
  };