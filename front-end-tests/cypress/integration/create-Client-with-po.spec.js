/// <reference types="cypress" />

import * as loginFuncs from "../pages/loginPage"
import * as dashboardFuncs from "../pages/dashboardPage"
import * as clientsFuncs from "../pages/clientsPage"
import * as createClientsFuncs from "../pages/clientNewPage"

var faker = require('faker');

let randomName = faker.name.findName();
let randomMail = faker.internet.email();
let randomPhone = faker.phone.phoneNumber();

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
        createClientsFuncs.createANewClient(randomName, randomMail,randomPhone, 'Clients')
        cy.log('Verify Last Client created with random faker  and log out --')
        clientsFuncs.verifyLastClient(randomName, randomMail,randomPhone)
        dashboardFuncs.performLogout('Login')
    })
})