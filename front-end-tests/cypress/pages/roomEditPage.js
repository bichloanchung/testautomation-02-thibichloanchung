/// <reference types="cypress" />

//Elements
const PRICE_EDIT_FIELD = ':nth-child(7) > input'
const SAVE_EDIT_BTN = '.blue'

//Functions
function editRoomsPrice(newprice,content){
    cy.get(PRICE_EDIT_FIELD).clear()
    cy.get(PRICE_EDIT_FIELD).type(newprice)
    cy.get(SAVE_EDIT_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    editRoomsPrice
}