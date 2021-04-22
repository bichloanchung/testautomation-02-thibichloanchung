/// <reference types="cypress" />

describe('Create Reservation', () =>{

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

    it('Test case 08: create reservation', () =>{
        cy.visit('http://localhost:3000/reservations')
        cy.get('h2').should('contain','Reservations')

        cy.get('h2 > .btn').click()
        cy.get('h2 > div').should('contain','New Reservation')

        cy.get(':nth-child(1) > input').type('2021-04-20')
        cy.get(':nth-child(2) > input').type('2021-04-25')
        cy.get(':nth-child(3) > select').select('Thi (#3)')
        cy.get(':nth-child(4) > select').select('Floor 1, Room 102')
        cy.get(':nth-child(5) > select').select('ID: 1')

        cy.get('.blue').click()
        cy.get('h2').should('contain','Reservations')

        cy.get('.user > .btn').click()
        cy.get('h2').should('contain','Login')
    })
})