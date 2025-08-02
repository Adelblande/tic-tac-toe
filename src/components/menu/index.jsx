import styles from "./styles.module.css";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../../context/settings-context";

export function Menu() {
  const { availableColorsCombinations, colors, setColors } =
    useContext(SettingsContext);

  function toggle() {
    if (
      document.querySelector(`.${styles.set}`).classList.contains(styles.show)
    ) {
      document.querySelector(`.${styles.set}`).classList.remove(styles.show);
    } else {
      document.querySelector(`.${styles.set}`).classList.add(styles.show);
    }
  }

  function handleSelectColor(colorsSelected) {
    setColors((state) => ({ ...state, ...colorsSelected }));
    toggle();
  }

  return (
    <div className={styles.set}>
      <button className={styles.mainMenu} onClick={toggle}>
        <img src="/settings.png" alt="Menu settings" width={30} height={30} />
      </button>
      <ul>
        {availableColorsCombinations.map((colors, index) => (
          <li key={index}>
            <button onClick={() => handleSelectColor(colors)}>
              <span style={{ color: colors.x }}>x</span>
              <span style={{ color: colors.o }}>o</span>
              <span style={{ color: colors.board }}>#</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
