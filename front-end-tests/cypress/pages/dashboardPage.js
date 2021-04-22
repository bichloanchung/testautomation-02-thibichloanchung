/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'

//Functions
function performLogout(content){
    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}

//Exports
module.exports ={
    performLogout
}