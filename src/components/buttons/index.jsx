import "./styles.css";

export function ResetButton({ value, onClick }) {
  return (
    <button className="reset-button" onClick={onClick}>
      {value}
    </button>
  );
}
