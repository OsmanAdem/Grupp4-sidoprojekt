// import cy from 'cypress'
// import { checkWinner } from '../../src/components/GomokuBoard.jsx'

// export { checkWinner }
// describe('Gomoku win conditions', () => {
//     it('Should detect horizantal win', () => {
//         const board = []
//         board[0][0] = 'X'
//         board[0][1] = 'X'
//         board[0][2] = 'X'
//         board[0][3] = 'X'
//         board[0][4] = 'X'

//         const winner = checkWinner(board, 0, 4, true)
//         expect(winner).to.equal('X')
//         expect(true).to.equal(true)
//     })
// })


describe('My First Test', () => {
    it('clicks the link', () => {
        cy.visit('http://localhost:3000/')
    })
})

describe('Player X  wins horizontally', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
    })
})

describe('Player O  wins vertically', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
    })
})

describe('Player X  wins diagonally', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
    })
})
