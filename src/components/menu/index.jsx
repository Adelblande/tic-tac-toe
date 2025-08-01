import "./styles.css";
import { useSettings } from "../../hooks/use-settings";

export function Menu() {
  const { availableColorsCombinations, setColors } = useSettings();

  function toggle() {
    if (document.querySelector(".set").classList.contains("show")) {
      document.querySelector(".set").classList.remove("show");
    } else {
      document.querySelector(".set").classList.add("show");
    }
  }

  return (
    <div className="set">
      <button className="main-menu" onClick={toggle}>
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
