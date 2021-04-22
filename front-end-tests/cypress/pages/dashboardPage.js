/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const VIEW_CLIENTS_BTN = '.blocks > :nth-child(2) > .btn'

//Functions
function performLogout(content){
    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}

function viewClient(content){
    cy.get(VIEW_CLIENTS_BTN).click()
    cy.contains(content)
}

//Exports
module.exports ={
    performLogout,
    viewClient
}