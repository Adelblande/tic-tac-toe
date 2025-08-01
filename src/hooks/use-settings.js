import { useState } from "react";

const availableColorsCombinations = [
  {
    x: "#242424",
    o: "#242424",
    board: "#242424",
    winningCombination: "#f05006",
  },
  {
    x: "#f05006",
    o: "#242424",
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

export function useSettings() {
  const [colors, setColors] = useState({
    x: "#242424",
    o: "#242424",
    board: "#242424",
    winningCombination: "#f05006",
  });

  return {
    colors,
    setColors,
    availableColorsCombinations,
  };
}
