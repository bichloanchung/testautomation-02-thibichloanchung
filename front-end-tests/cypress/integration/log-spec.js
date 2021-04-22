/// <reference types="cypress" />

describe('Login user', () =>{

    it('Test case 01', () =>{
        cy.visit('http://localhost:3000')
        cy.title().should('eq', 'Testers Hotel')
        cy.get('h2').should('contain','Login')

        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        
        cy.get('.btn').click()

        cy.get('.username').should('contain','Welcome tester01!')
        cy.get('h2').should('contain','Tester Hotel Overview')
        
        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')
    })
})