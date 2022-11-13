export const COLORS = {
  white: "#FFFFFF",
  black: "#000000",
  gray: "gray",
  lightgray: "lightgray",
};

export const darkTheme = {
  name: "dark",
  backgroundColor1: "gray",
  textColor: "white",
};

export const lightTheme = {
  name: "light",
  backgroundColor1: "white",
  textColor: "black",
};

export const selectedTheme = darkTheme;

const appTheme = { darkTheme, lightTheme };

export default appTheme;
