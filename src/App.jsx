import styles from "./App.module.css";

import {
  ResetButton,
  Timer,
  Board,
  Scores,
  Header,
  Main,
  Menu,
} from "./components/index.js";
import { useGame } from "./hooks/use-game";
import { SettingsProvider } from "./context/settings-provider";

export default function App() {
  const { game, message, player, scores, handleClick, resetGame, setPlayer } =
    useGame();

  return (
    <SettingsProvider>
      <Header>
        <Scores scores={scores} />
        {!message && <Timer player={player} setPlayer={setPlayer} />}
      </Header>

      <Main>
        {message && <span className={styles.message}>{message}</span>}
        <Board game={game} handleClick={handleClick} />
        <ResetButton onClick={resetGame} value="Reset Game" />

        <Menu />
      </Main>
    </SettingsProvider>
  );
}
