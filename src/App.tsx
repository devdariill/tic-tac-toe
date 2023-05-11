import { useState } from "react";

const WINNER_COMBINATIONS_TICTACTOE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const GRID = Array.from(Array(9).keys());

function App() {
  const [player, setPlayer] = useState<"X" | "O">("X");
  // const [plays, setPlays] = useState<Map<number, "X" | "O">>(() => new Map());
  const [plays, setPlays] = useState<Record<number, "X" | "O">>({});

  function handleClick() {
    // setPlays((playsState) => ({...playsState, [cell]: player}));
    setPlayer((playerState) => (playerState === "X" ? "O" : "X"));
  }

  return (
    <main>
      {GRID.map((i) => (
        <button key={i} className="square" onClick={handleClick}>
          {/* {plays[i]} */}
        </button>
      ))}
    </main>
  );
}

export default App;
