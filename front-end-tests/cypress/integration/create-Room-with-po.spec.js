/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as createRoomFuncs from '../pages/roomNewPage'

describe('Testsuite', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform a new room creation', () =>{
        dashboardFuncs.viewRoom('Rooms')
        roomsFuncs.viewRoomNew('New Room')
        createRoomFuncs.createNewRoom('Twin', '201', '02', '2000', 'Balcony', 'Rooms')

    })
})