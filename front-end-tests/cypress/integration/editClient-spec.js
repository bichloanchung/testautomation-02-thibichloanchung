/// <reference types="cypress" />

describe('Edit Client', () =>{

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

    it('Test case 05: edit client', () =>{
        cy.visit('http://localhost:3000/clients')
        cy.get('h2').should('contain','Clients')

        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.contains('Client')

        cy.get(':nth-child(5) > input').clear()
        cy.get(':nth-child(5) > input').type('0123456789')

        cy.get('.blue').click()

        cy.get('h2').should('contain','Clients')
        cy.contains('Thi')

        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')
    })
})