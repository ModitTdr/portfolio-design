module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  safelist: [
    {
      pattern: /(bg|text|border)-(red|blue|green|yellow|purple|pink|indigo|orange|cyan|teal)-(100|200|300|400|500|600|700)/,
    },
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}
