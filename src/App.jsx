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
import { SettingsProvider } from "./context/settings-provider";
import { SettingsContext } from "./context/settings-context";
import { useGame } from "./hooks/use-game";

import { useContext } from "react";

function App() {
  const { colors } = useContext(SettingsContext);
  const { game, message, player, scores, handleClick, resetGame, setPlayer } =
    useGame();

  return (
    <SettingsProvider>
      <Header>
        <Scores scores={scores} />
        {!message && <Timer player={player} setPlayer={setPlayer} />}
      </Header>

      <Main backgroundColor={colors.board}>
        {message && <span className={styles.message}>{message}</span>}
        <Board game={game} handleClick={handleClick} colors={colors} />
        <ResetButton onClick={resetGame} value="Reset Game" />
        <Menu />
      </Main>
    </SettingsProvider>
  );
}

export default App;
