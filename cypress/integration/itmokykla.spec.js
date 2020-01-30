/// <reference types="Cypress" />

context('ITMokykla', () => {
    beforeEach(() => {
        cy.visit('https://itmokykla.lt/testing/one.html')
    })

    it('Enter username into user form', () => {
        cy.get('#name')
          .type('Gediminas').should('have.value', 'Gediminas')
    })
})
