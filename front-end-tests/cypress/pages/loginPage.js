/// <reference types="cypress" />

//Elements
const LOGIN_PAGE_TITLE = 'Testers Hotel'
const FORM_LABEL = 'Login'
const USERNAME_FIELD = 'nth-child(1) > input'
const PASSWD_FIELD = ':nth-child(2) > input'
const LOGIN_BTN = '.btn'

//Functions
function checkLoginPageTitle(){
    cy.title().should('eq', LOGIN_PAGE_TITLE)
}

function performValidLogin(){

}
// Exports
module.exports = {
    checkLoginPageTitle
}