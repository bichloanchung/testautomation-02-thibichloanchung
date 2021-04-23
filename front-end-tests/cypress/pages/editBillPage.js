/// <reference types="cypress" />

//Elements
const VALUE_EDIT_FIELD = ':nth-child(3) > input'
const SAVE_EDIT_BTN = '.blue'

//Functions
function editLastBill(newvalue, content){
    cy.get(VALUE_EDIT_FIELD).clear()
    cy.get(VALUE_EDIT_FIELD).type(newvalue)
    cy.get(SAVE_EDIT_BTN).click()
    cy.contains(content)
}


//Exports
module.exports = {
    editLastBill

}