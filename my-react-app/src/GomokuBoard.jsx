import React from 'react';
import './GomokuBoard.css';

function GomokuBoard() {
  const board = [];

  for (let row = 0; row < 17; row++) {
    for (let col = 0; col < 17; col++) {
      board.push(
        <div key={`cell-${row}-${col}`} className="cell">
          {/* Lägg till innehåll för varje ruta om så önskas */}
        </div>
      );
    }
  }

  return (
    <div className="gomoku-board">
      {board}
    </div>
  );
}

export default GomokuBoard;




