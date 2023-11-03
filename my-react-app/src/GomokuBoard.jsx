import React from 'react';
import './GomokuBoard.css';

function GomokuBoard() {
  const board = [];
  let player = true

function clickOnTheSquares(e){
  if(e.target.innerHTML === ''){
    e.target.innerHTML = player ? 'X' : 'O'
    player = !player
  }
}

  for (let row = 0; row < 17; row++) {
    for (let col = 0; col < 17; col++) {
      board.push(
        <div key={`cell-${row}-${col}`} className="cell" onClick={clickOnTheSquares}>
          {/* Lägg till innehåll för varje ruta om så önskas */}
        </div>
      );
    }
  }

  return (
    <div>
      <h1>GOMOKU</h1>
    <div className="gomoku-board">
      {board}
    </div>
    <button>New Game</button>
    </div>
  );
}

export default GomokuBoard;
