import { createContext } from "react";

export const availableColorsCombinations = [
  {
    x: "#7f00a4",
    o: "#d008f1",
    board: "#d6c1ef",
    winningCombination: "#aaffff",
  },
  {
    x: "#008209",
    o: "#50cc56",
    board: "#28a730",
    winningCombination: "#aaffff",
  },
  {
    x: "#8b0004",
    o: "#e11940",
    board: "#b90a1e",
    winningCombination: "#aaffff",
  },
];

export const SettingsContext = createContext({
  colors: availableColorsCombinations[0],
});
