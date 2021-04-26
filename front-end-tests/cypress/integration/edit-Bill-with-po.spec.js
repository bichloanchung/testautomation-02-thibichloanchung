/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as billsFuncs from '../pages/billsPage'
import * as editBillFuncs from '../pages/editBillPage'

import faker from 'faker'

describe('Testsuite', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform bill edition', () =>{
        dashboardFuncs.viewBill('Bills')
        billsFuncs.editBillAction('Bill')

        let randomBillValue = faker.commerce.price()
        editBillFuncs.editLastBill(randomBillValue, 'Bills')
        cy.log('Last bill edited')
        
        dashboardFuncs.performLogout('Login')

    })
})