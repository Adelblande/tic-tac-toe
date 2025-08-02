import { createContext } from "react";
export const SettingsContext = createContext({
  colors: {
    x: "#f00065",
    o: "#49007e",
    board: "#242424",
    winningCombination: "#f05006",
  },
});
