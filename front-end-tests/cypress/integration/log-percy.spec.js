/// <reference types="cypress" />

import * as loginFuncs from "../pages/loginPage"
import * as dashboardFuncs from "../pages/dashboardPage"

describe('Testsuite', () =>{
    
    it('Perform a valid login and log out',() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        // ->> we are at index (login) page!
        cy.log('At login page!')
        cy.percySnapshot('index-page')

        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        // ->> we are at dashboard page
        cy.log('At dashboard page!')
        cy.percySnapshot('dashboard-page')
        
        //dashboardFuncs.performLogout('Login')
    })
})