import cy from 'cypress'

describe('Player X  wins horizontally', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.square').eq(0).click()
    cy.get('.square').eq(1).click()
    cy.get('.square').eq(2).click()
    cy.get('.square').eq(3).click()
    cy.get('.square').eq(4).click()
    cy.get('The player is winner!').should('Player X win')
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
