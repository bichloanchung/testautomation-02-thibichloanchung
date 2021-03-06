/// <reference types="cypress" />

import * as loginFuncs from "../pages/loginPage"
import * as dashboardFuncs from "../pages/dashboardPage"

describe('Testsuite', () =>{
    
    it('Perform a valid login and log out',() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        dashboardFuncs.performLogout('Login')
    })
})