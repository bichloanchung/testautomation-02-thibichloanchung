/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as reserFuncs from '../pages/reservationsPage'


describe('Testsuite', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform a reservation deleted', () =>{
        dashboardFuncs.viewReservation('Reservations')
        reserFuncs.deleteReservation('Reservations')
        
        dashboardFuncs.performLogout('Login')

    })
})