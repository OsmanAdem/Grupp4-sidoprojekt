import React, { useEffect, useState } from 'react'
import './GomokuBoard.css'
import image from '../img/löv3.PNG'
// import xImage from '../src/img/x.PNG'
// import OImage from '../src/img/o.PNG'

function GomokuBoard() {
    const [board, setBoard] = useState(Array(17).fill(Array(17).fill('')))
    const [player, setPlayer] = useState(true)
    const [winner, setWinner] = useState(null)
    const [pointPlayerX, setPointsPlayerX] = useState(0)
    const [pointPlayerO, setPointsPlayerO] = useState(0)

    // function clickOnTheSquares(e) {
    //     if (e.target.innerHTML === '') {
    //         // e.target.innerHTML = `<span>${player ? `<img src="${xImage}" alt='' />` : `<img src="${oImage}" alt='' />`}</span>`
    //         e.target.innerHTML = `<span>${player ? 'X' : 'O'}</span>`
    //         player = !player
    //     }
    // }
    useEffect(() => {
        if (winner === 'X') {
            setPointsPlayerX(pointPlayerX + 1)
        } else if (winner === 'O') {
            setPointsPlayerO(pointPlayerO + 1)
        }
    }, [winner])
    function checkWinner(row, col) {
        const directions = [
            [1, 0],
            [0, 1],
            [1, 1],
            [1, -1]
        ]

        for (const [dx, dy] of directions) {
            let count = 1

            for (let i = 1; i < 5; i++) {
                const newRow = row + i * dx
                const newCol = col + i * dy
                if (
                    newRow >= 0 &&
                    newRow < 17 &&
                    newCol >= 0 &&
                    newCol < 17 &&
                    board[newRow][newCol] === (player ? 'X' : 'O')
                ) {
                    count++
                } else {
                    break
                }
            }

            for (let i = 1; i < 5; i++) {
                const newRow = row - i * dx
                const newCol = col - i * dy
                if (
                    newRow >= 0 &&
                    newRow < 17 &&
                    newCol >= 0 &&
                    newCol < 17 &&
                    board[newRow][newCol] === (player ? 'X' : 'O')
                ) {
                    count++
                } else {
                    break
                }
            }

            if (count >= 5) {
                setWinner(player ? 'X' : 'O')
                return true
            }
        }

        return false
    }

    function clickOnTheSquares(row, col) {
        if (winner || board[row][col] !== '') {
            return
        }

        const newBoard = board.map((r, rowIndex) =>
            r.map((cell, colIndex) =>
                rowIndex === row && colIndex === col
                    ? player
                        ? 'X'
                        : 'O'
                    : cell
            )
        )

        setBoard(newBoard)

        if (checkWinner(row, col)) {
            setWinner(player ? 'X' : 'O')
        } else {
            setPlayer(!player)
        }
    }

    const cells = board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
            <div
                key={`cell-${rowIndex}-${colIndex}`}
                className={`cell ${cell === 'X' ? 'x-cell' : 'o-cell'}`}
                onClick={() => clickOnTheSquares(rowIndex, colIndex)}
            >
                {cell}
            </div>
        ))
    )

    return (
        <div className="game-container">
            <img src={image} alt="pic" className="background-img"></img>
            <div className="content-container">
                <h1 className="Gomoku-title">GOMOKU</h1>
                {/* <div className="gomoku-board">{board}</div> */}
                {/* <button>New Game</button> */}
            </div>

            <div>
                <div className="gomoku-board"  data-layer="Content">{cells}</div>
                {winner ? (
                    <div>
                        <p className="winner">Player {winner} wins!</p>
                        <p className="playerPointX"> Player X points : {pointPlayerX} </p>
                        <p className="playerPointO"> Player O points : {pointPlayerO} </p>
                    </div>
                ) : null}
                <button onClick={() => window.location.reload()}>
                    New Game
                </button>
            </div>
        </div>
    )
}

export default GomokuBoard
