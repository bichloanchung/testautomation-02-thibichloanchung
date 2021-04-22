/// <reference types="cypress" />

//Elements
const CREATE_CLIENT_BTN = 'h2 > .btn'

//Functions
function viewClientNew(content){
    cy.get(CREATE_CLIENT_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    viewClientNew
}