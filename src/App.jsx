import styles from "./App.module.css";
import { ResetButton, Timer, Board, Scores } from "./components/index.js";
import { Menu } from "./components/menu/index.jsx";
import { useGame } from "./hooks/use-game";
import { useSettings } from "./hooks/use-settings";

function App() {
  const { game, message, player, scores, handleClick, resetGame, setPlayer } =
    useGame();
  const { colors } = useSettings();

  return (
    <>
      <header className={styles.header}>
        <Scores scores={scores} />
        {!message && <Timer player={player} setPlayer={setPlayer} />}
      </header>

      <main className={styles.main}>
        {message && <span className={styles.message}>{message}</span>}
        <Board game={game} handleClick={handleClick} />
        <ResetButton onClick={resetGame} value="Reset Game" />
        <Menu />
      </main>
    </>
  );
}

export default App;
