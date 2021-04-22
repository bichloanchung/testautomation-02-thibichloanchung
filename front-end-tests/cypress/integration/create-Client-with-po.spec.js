/// <reference types="cypress" />

import * as loginFuncs from "../pages/loginPage"
import * as dashboardFuncs from "../pages/dashboardPage"
import * as clientsFuncs from "../pages/clientsPage"
import * as createClientsFuncs from "../pages/clientNewPage"

describe('Testsuite', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform new client creation', () =>{
        dashboardFuncs.viewClient('Clients')
        clientsFuncs.viewClientNew('New Client')
        createClientsFuncs.createANewClient('Thi', 'thi@tester.se','0123456789', 'Clients')
        //verify Last Client and log out
        clientsFuncs.verifyLastClient('Thi', 'thi@tester.se', '0123456789')
        dashboardFuncs.performLogout('Login')
    })
})