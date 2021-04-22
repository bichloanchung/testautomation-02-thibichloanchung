/// <reference types="cypress" />

describe('Edit Room', () =>{

    it('Test case 01: login', () =>{
        cy.visit('http://localhost:3000')
        cy.title().should('eq', 'Testers Hotel')
        cy.get('h2').should('contain','Login')

        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        
        cy.get('.btn').click()

        cy.get('.username').should('contain','Welcome tester01!')
        cy.get('h2').should('contain','Tester Hotel Overview')
    })

    it('Test case 03: edit room', () =>{
        cy.visit('http://localhost:3000/rooms')
        cy.get('h2').should('contain','Rooms')

        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()

        cy.get('h2').should('contain','Room')
        cy.get(':nth-child(7) > input').clear()
        cy.get(':nth-child(7) > input').type('2000')
        cy.get('.blue').click()
       
        cy.get('h2').should('contain','Rooms')

        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')
    })
})