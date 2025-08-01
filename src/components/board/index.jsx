import "./styles.css";

export function Board({ game, handleClick }) {
  return (
    <div className="board">
      {game.map((value, index) => {
        return (
          <span key={index} onClick={() => handleClick(index)}>
            {value}
          </span>
        );
      })}
    </div>
  );
}
