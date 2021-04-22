/// <reference types="cypress" />

import * as loginPage from "../pages/loginPage"

describe('Testsuite', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        loginPage.checkLoginPageTitle()

    })

    it('Login and log out',() =>{

    })
})