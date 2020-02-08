/// <reference types="Cypress" />

context('ITMokykla', () => {
    beforeEach(() => {
        cy.visit('https://itmokykla.lt/testing/one.html')
    })

    it('Successfully register new user', () => {
        cy.get('#name').type('Gediminas')

        cy.get('[type="radio"][value="female"]').check()

        cy.get('.btn-success.btn-lg').click()

        cy.get('.alert.alert-success').should('have.text', 'Registration successfull')
    })
})
