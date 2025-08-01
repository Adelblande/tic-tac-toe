import styles from "./styles.module.css";
import { useSettings } from "../../hooks/use-settings";

export function Menu() {
  const { availableColorsCombinations, setColors } = useSettings();

  function toggle() {
    if (
      document.querySelector(`.${styles.set}`).classList.contains(styles.show)
    ) {
      document.querySelector(`.${styles.set}`).classList.remove(styles.show);
    } else {
      document.querySelector(`.${styles.set}`).classList.add(styles.show);
    }
  }

  return (
    <div className={styles.set}>
      <button className={styles.mainMenu} onClick={toggle}>
        <img src="/settings.png" alt="Menu settings" width={30} height={30} />
      </button>
      <ul>
        {availableColorsCombinations.map((colors, index) => (
          <li key={index}>
            <button onClick={() => setColors(colors)}>
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
