/// <reference types="cypress" />

import * as loginFuncs from "../pages/loginPage"
import * as dashboardFuncs from "../pages/dashboardPage"
import * as clientsFuncs from "../pages/clientsPage"
import * as editClientsFuncs from "../pages/clientEditPage"

import faker from 'faker'

describe('Testsuite', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform a client edition', () =>{
        dashboardFuncs.viewClient('Clients')
        clientsFuncs.editClientAction('Client')
        
        let randomPhoneN = faker.phone.phoneNumber()
        editClientsFuncs.editLastClient(randomPhoneN, 'Clients')
        cy.log('Last client phones edited!')
        dashboardFuncs.performLogout('Login')
    })
})