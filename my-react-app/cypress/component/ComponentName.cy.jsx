import cy from 'cypress'
// import GomokuBoard from '../../src/components/GomokuBoard'
// // describe('ComponentName.cy.jsx', () => {
// //   it('playground', () => {
// //     // cy.mount()
// //   })
// // })

// describe('Player X  wins horizontally', () => {
//     beforeEach(() => {
//         cy.mount(<GomokuBoard />)
//     })
//     it('Check everything is working ', () => {
//         // cy.visit('http://localhost:3000/')
//         // cy.mount('cell')
//         // cy.mount('board')
//     })
// })
describe('Gomoku game tests', () => {
    beforeEach(() => {})
    it('Check result', () => {
        checkWinner(3, 3)
        checkWinner(4, 4)
        checkWinner(5, 3)
        checkWinner(4, 5)
        checkWinner(6, 6)
    })
    function checkWinner(row, col) {}
})

describe('Gomoku tests', () => {
    beforeEach(() => {})
    it('Check ', () => {


        clickOnTheSquares(3, 3)
        clickOnTheSquares(4, 4)
        clickOnTheSquares(5, 3)
        clickOnTheSquares(4, 5)
        clickOnTheSquares(6, 6)
    })
    function clickOnTheSquares(row, col) {}
    // cy.get('.game-board')
    // .find('[data-layer="Content"]')
    // .click();

})

// describe('Player X  wins horizontally', () => {
//   it('Check everything is working', () => {
//     cy.visit('http://localhost:3000/')
// cy.get('.square').eq(0).click()
// cy.get('.square').eq(1).click()
// cy.get('.square').eq(2).click()
// cy.get('.square').eq(3).click()
// cy.get('.square').eq(4).click()
// cy.get('The player is winner!').should('Player X win')
//   })
// })

// describe('Player O  wins vertically', () => {
//   it('Check everything is working', () => {
//     cy.visit('http://localhost:3000/')
//   })
// })

// describe('Player X  wins diagonally', () => {
//   it('Check everything is working', () => {
//     cy.visit('http://localhost:3000/')
//   })
// })
