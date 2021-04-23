/// <reference types="cypress" />

//Elements
const VALUE_FIELD = 'input'
const PAID_FIELD = '.checkbox'
const SAVE_BTN = '.blue'

//Functions
function createNewBill(value,content){
    cy.get(VALUE_FIELD).type(value)
    //cy.get(PAID_FIELD).click()
    cy.get(SAVE_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    createNewBill
    

}