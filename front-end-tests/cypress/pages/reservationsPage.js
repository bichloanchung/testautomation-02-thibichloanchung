/// <reference types="cypress" />

//Elements
const CREATE_RESERVT_BTN = 'h2 > .btn'

//Functions
function createResAction(content){
    cy.get(CREATE_RESERVT_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    createResAction
}