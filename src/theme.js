const colors = {
  primary: "#13f268",
  complementary: "#33cf96",
  error: "#bc1232",
  success: "#1ac925",
  light: "#f8ffe8",
  lighter: "#f5fbe7",
  lightest: "#ffffff",
  dark: "#0f0f0f",
  darker: "#0a0a0a",
  darkest: "#050414",
};

const sizes = {
  borderRadius: {
    m: "4px",
    l: "8px",
  },
  border: {
    m: "2px",
  },
};

const space = {
  s: 6,
  m: 12,
  l: 22,
  xl: 36,
};

const fonts = {
  body: "'Work Sans', sans-serif",
  heading: "'Montserrat', sans-serif",
  logo: "'Fredoka One', cursive",
};

const shared = {
  colors,
  sizes,
  fonts,
  space,
};

export const lightTheme = {
  ...shared,
  background: colors.light,
  text: colors.darker,
  buttonText: colors.lightest,
  cardBackground: colors.lightest,
};

export const darkTheme = {
  ...shared,
  background: colors.darker,
  text: colors.lighter,
  buttonText: colors.darker,
  cardBackground: colors.dark,
};
