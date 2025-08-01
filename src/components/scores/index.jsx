import "./styles.css";

export function Scores({ scores }) {
  return (
    <div className="scores">
      <h3>Scores</h3>
      <p>Player X: {scores.x}</p>
      <p>Player O: {scores.o}</p>
    </div>
  );
}
