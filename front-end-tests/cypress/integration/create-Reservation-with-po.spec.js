/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as reserFuncs from '../pages/reservationsPage'
import * as createResFuncs from '../pages/reserNewPage'

describe('Testsuite', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform a reservation creation', () =>{
        dashboardFuncs.viewReservation('Reservations')
        reserFuncs.createResAction('New Reservation')
        createResFuncs.createReservation('2021-06-02', '2021-06-04', 'Thi (#3)', 'Floor 1, Room 101', 'ID: 2', 'Reservations')

        dashboardFuncs.performLogout('Login')

    })
})