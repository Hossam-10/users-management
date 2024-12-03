/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    400: "#347985",
    500: "#015766",
    900: "#00252B",
  },
  secondary: {
    s: {
      300: "#F0F2F5",
    },
    50: "#F5FEE6",
    100: "#DFFCB1",
    300: "#BAF856",
    400: "#ADF635",
    700: "#6CAD02",
    800: "#548602",
    900: "#406601",
  },
  text: {
    200: "#797E91",
    300: "#929CA6",
    400: "#707A85",
    500: "#434C56",
    600: "#252B33",
    700: "#0F141A",
    800: "#797C8A",
    900: "#050607",
  },
  background: {
    25: "#F7F9FA",
    50: "#F8F9FA",
    100: "#F5F6F7",
    200: "#E8E9EB",
  },
  strk: {
    3: "#E6E7ED",
    75: "#DFE3E7",
    100: "#D2D7DD",
    300: "#B1BAC4",
    500: "#6C7178",
  },
  warning: {
    50: '#FEF4E6',
    100: '#FCDCB0',
    200: '#FACB8A',
    300: '#F8B354',
    400: '#F7A433',
    500: '#F58D00',
    600: '#DF8000',
    700: '#AE6400',
    800: '#874E00',
    900: '#673B00',
  },
  success: {
    500: "#01A66F",
    600: "#019765",
  },
  error: {
    500: "#F5000A",
  },

  border: {
    25: "#D2D7DD",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      boxShadow: {
        custom: "0px 1px 16px 0px rgba(179, 239, 203, 0.12)",
      },
    },
    container: {
      center: true,
      maxWidth: "1440px",
    },
  },
};

