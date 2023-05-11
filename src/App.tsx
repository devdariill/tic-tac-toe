// eslint-disable-next-line prettier/prettier
import { useState } from "react";

const WINNER_COMBINATIONS = [
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
  const [plays, setPlays] = useState<Map<number, "X" | "O">>(() => new Map());
  // const [plays, setPlays] = useState<Record<number, "X" | "O">>({});

  function handleClick(cell: number) {
    if (plays.has(cell)) return;
    const draft = new Map(plays).set(cell, player);
    // const draft = {...plays, [cell]: player};
    const winner = WINNER_COMBINATIONS.find(
      (combination) => combination.every((cell) => draft.get(cell) === player),
      // combination.every((cell) => draft[cell] === player),
    );

    setPlays(draft);
    if (winner) {
      setTimeout(() => {
        alert(`${player} wins!`);
        setPlays(new Map());
      }, 100);
      // setPlays({});

      return;
    }
    setPlayer((playerState) => (playerState === "X" ? "O" : "X"));
  }

  return (
    <main>
      {GRID.map((i) => (
        <button key={i} className="square" onClick={() => handleClick(i)}>
          {plays.get(i)}
        </button>
      ))}
    </main>
  );
}

export default App;
