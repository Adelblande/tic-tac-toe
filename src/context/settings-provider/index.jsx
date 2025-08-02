import { useState } from "react";
import { SettingsContext } from "../settings-context.js";

const availableColorsCombinations = [
  {
    x: "#f00065",
    o: "#49007e",
    board: "#242424",
    winningCombination: "#f05006",
  },
  {
    x: "#029b99",
    o: "#ccff33",
    board: "#242424",
    winningCombination: "#f05006",
  },
  {
    x: "#242424",
    o: "#f05006",
    board: "#242424",
    winningCombination: "#f05006",
  },
];

export function SettingsProvider({ children }) {
  const [colors, setColors] = useState();
  return (
    <SettingsContext.Provider
      value={{ colors, availableColorsCombinations, setColors }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
