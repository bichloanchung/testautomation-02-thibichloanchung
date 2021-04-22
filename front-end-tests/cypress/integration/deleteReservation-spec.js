/// <reference types="cypress" />

describe('Delete Reservation', () =>{

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

    it('Test case 09: delete reservation', () =>{
        cy.visit('http://localhost:3000/reservations')
        cy.get('h2').should('contain','Reservations')

        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()

        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')
    })
})