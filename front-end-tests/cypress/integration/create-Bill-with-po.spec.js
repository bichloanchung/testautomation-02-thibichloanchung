/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as billsFuncs from '../pages/billsPage'
import * as createBillsFuncs from '../pages/billNewPage'


describe('Testsuite', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform a bill creation', () =>{
        dashboardFuncs.viewBill('Bills')
        billsFuncs.createBillAction('New Bill')
        createBillsFuncs.createNewBill('5000','Bills')

        dashboardFuncs.performLogout('Login')

    })
})