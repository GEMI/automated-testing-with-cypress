/// <reference types="Cypress" />

context('ITMokykla', () => {
    beforeEach(() => {
        cy.visit('https://itmokykla.lt/testing/one.html')
    })

    it('Should successfully register new user', () => {
        cy.get('#name').type('Markberg')

        cy.get('[type="radio"][value="male"]').check()

        cy.get('.btn-success.btn-lg').click()

        cy.get('.alert.alert-success').should('have.text', 'Registration successfull')
    })

    // use online text generator random.org
    it('Should not allow comments longer than 250 symbols', () => {
        cy.get('#name').type('Christine')

        cy.get('[type="radio"][value="female"]').check()

        cy.get('#comment')
        .type(`LQXXHluuJbNOmZKhOmCe
            edXnUWAqYBWaGgZjJQtz
            MyzvHRrDntJyohGxuznY
            QtIqRsSGGDepkAHiwTIZ
            xquBaNqBRVCqvhrpNIsv
            vuyCrxHoWzixhZAiSGhb
            nHMLYvaeAnJPRBnOioDG
            NONhXrSIIIIZYjjgSHhX
            iqGjbPmlKXELMdqIavXc
            IVuaUPaVXYahCxfBPmhE
            kCwIEJdcjDARDFoVbjWE
            FxofqgViXqweOUkscnrU
            UvUEcyqxEomTIMqYHBpm
            wHRXAbVivVxXDsDFOCxG
            DuazcYFORuRFEHYrvmje`)

        cy.get('.btn-success.btn-lg').click()

        cy.get('.alert.alert-danger').should('have.text', 'Comment is too long!')
    })
})
