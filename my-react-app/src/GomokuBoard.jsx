import React from 'react';
import './GomokuBoard.css';
import image from '../src/img/Gomoku1.jpg'
// import xImage from '../src/img/x.PNG'
// import OImage from '../src/img/o.PNG'

function GomokuBoard() {
  const board = [];
  let player = true

function clickOnTheSquares(e){
  if(e.target.innerHTML === ''){
    // e.target.innerHTML = `<span>${player ? `<img src="${xImage}" alt='' />` : `<img src="${oImage}" alt='' />`}</span>`
    e.target.innerHTML = `<span>${player ? 'X' : 'O'}</span>`
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
    <div className='game-container'>
      <img src={image} alt='pic' className='background-img'></img>
      <div className='content-container'>
      <h1 className="Gomoku-title">GOMOKU</h1>
    <div className="gomoku-board">
      {board}
    </div>
    <button>New Game</button>
    </div>
    </div>
  );
}

export default GomokuBoard;
