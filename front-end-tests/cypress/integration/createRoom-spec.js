/// <reference types="cypress" />

describe('Create Room', () =>{

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

    it('Test case 02: create room', () =>{
        cy.visit('http://localhost:3000/rooms')
        cy.get('h2').should('contain','Rooms')

        cy.get('h2 > .btn').click()

        cy.get('h2').should('contain','New Room')
        cy.get(':nth-child(1) > select').select('Twin')
        cy.get(':nth-child(2) > input').type('009')
        cy.get(':nth-child(3) > input').type('9')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1200')
        cy.get('[value="balcony"]').should('have.value','balcony')
        cy.get(':nth-child(6) > select').select('Sea View')
        cy.get('.blue').click()

        cy.get('h2').should('contain','Rooms')
        cy.contains('Room 9')

        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')
    })
})