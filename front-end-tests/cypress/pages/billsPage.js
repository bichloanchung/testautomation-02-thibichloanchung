/// <reference types="cypress" />

//Elements
const CREATE_BILL_BTN = 'h2 > .btn'
const THREE_DOTS_BTN = '.action > img'
const EDIT_BILL_BTN = '.menu > :nth-child(1)'

//Functions
function createBillAction(content){
    cy.get(CREATE_BILL_BTN).click()
    cy.contains(content)
}

function editBillAction(content){
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(EDIT_BILL_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    createBillAction,
    editBillAction

}