import React from "react";

export const myContext = React.createContext();

const Context = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <myContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </myContext.Provider>
  );
};

// Data
// export const themes = {
//   light: {
//     // foreground: "#000000",
//     background: "white",
//     color: "black",
//   },
//   dark: {
//     // foreground: "#ffffff",
//     background: "black",
//     color: "white",
//   },
// };

export default Context;
