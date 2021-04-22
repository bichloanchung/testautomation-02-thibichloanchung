/// <reference types="cypress" />

describe('Create Client', () =>{

    it('Test case 01: log in', () =>{
        cy.visit('http://localhost:3000')
        cy.title().should('eq', 'Testers Hotel')
        cy.get('h2').should('contain','Login')

        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        
        cy.get('.btn').click()

        cy.get('.username').should('contain','Welcome tester01!')
        cy.get('h2').should('contain','Tester Hotel Overview')
        
    })

    it('Test case 04: create client', () =>{
        cy.visit('http://localhost:3000/clients')
        cy.get('h2').should('contain','Clients')

        cy.get('h2 > .btn').click()
        cy.get('h2').should('contain','New Client')

        cy.get(':nth-child(1) > input').type('Thi')
        cy.get(':nth-child(2) > input').type('thibichloan.chung@learnet.se')
        cy.get(':nth-child(3) > input').type('0702448717')
        cy.get('.blue').click()

        cy.get('h2').should('contain','Clients')
        cy.contains('Thi')

        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')
    })
})