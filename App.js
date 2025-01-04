import './App.css';
import React from 'react'
import { useState } from 'react';

function App() {
  const [block, setBlock] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const funcWin = (block) => {
    const winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winCondition) {
      if (block[a] && block[a] === block[b] && block[a] === block[c]) {
        return block[a];
      }
    }
    return null;
  };

  const winner = funcWin(block);
  const draw = !winner && block.every((square) => square !== null);

  const handleClick = (index) => {
    if (block[index] || winner) return;

    const newBlock = block.slice();
    newBlock[index] = turn ? "X" : "O";
    setBlock(newBlock);
    setTurn(!turn);
  };

  const reset = () => {
    setBlock(Array(9).fill(null));
    setTurn(true);
  };

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      <div className="board">
        {block.map((square, index) => (
          <button key={index} className="block" onClick={() => handleClick(index)}>
            {square}
          </button>
        ))}
      </div>
      {winner ? <h2>WINNER: {winner}</h2> : draw ? <h2>Draw!</h2> : <h2>NEXT PLAYER: {turn ? "X" : "O"}</h2>}
      <button onClick={reset} className="reset">
        RESET GAME
      </button>
    </div>
  );
}

export default App;