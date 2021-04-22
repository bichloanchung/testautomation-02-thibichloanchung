/// <reference types="cypress" />

//Elements
const LOGIN_PAGE_TITLE = 'Testers Hotel'
const FORM_LABEL = 'h2'
const USERNAME_FIELD = ':nth-child(1) > input'
const PASSWD_FIELD = ':nth-child(2) > input'
const LOGIN_BTN = '.btn'

//Functions
function checkLoginPageTitle(){
    cy.title().should('eq', LOGIN_PAGE_TITLE)
}

function confirmLabel(content){
    cy.get(FORM_LABEL).should('contain',content)
}

function performValidLogin(username, passwd, confirmationContent){
    cy.get(USERNAME_FIELD).type(username)
    cy.get(PASSWD_FIELD).type(passwd)    
    cy.get(LOGIN_BTN).click()
    cy.contains(confirmationContent)
    cy.wait(500)
}


// Exports
module.exports = {
    checkLoginPageTitle,
    confirmLabel,
    performValidLogin
}