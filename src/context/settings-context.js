import { createContext } from "react";

export const availableColorsCombinations = [
  {
    x: "#f00065",
    o: "#49007e",
    board: "#242424",
    winningCombination: "#f05006",
  },
  {
    x: "#029b99",
    o: "#ccff33",
    board: "#030303",
    winningCombination: "#f05006",
  },
  {
    x: "#242424",
    o: "#f05006",
    board: "#3c3c3c",
    winningCombination: "#f05006",
  },
];

export const SettingsContext = createContext({
  colors: availableColorsCombinations[0],
});
