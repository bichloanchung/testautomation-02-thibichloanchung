/// <reference types="cypress" />

//Elements
const CREATE_BILL_BTN = 'h2 > .btn'

//Functions
function createBillAction(content){
    cy.get(CREATE_BILL_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    createBillAction

}