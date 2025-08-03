import { useState } from "react";
import {
  availableColorsCombinations,
  SettingsContext,
} from "../settings-context";

export function SettingsProvider({ children }) {
  const [colors, setColors] = useState(availableColorsCombinations[0]);

  return (
    <SettingsContext.Provider
      value={{ colors, setColors, availableColorsCombinations }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
