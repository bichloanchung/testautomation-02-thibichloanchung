/// <reference types="cypress" />

//Elements
const NAME_EDIT_FIELD = ':nth-child(3) > input'
const MAIL_EDIT_FIELD = ':nth-child(4) > input'
const PHONE_EDIT_FIELD = ':nth-child(5) > input'
const SAVE_EDIT_BTN = '.blue'


//Functions
function editLastClient(phone,content){
    cy.get(PHONE_EDIT_FIELD).clear()
    cy.get(PHONE_EDIT_FIELD).type(phone)
    cy.get(SAVE_EDIT_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    editLastClient  
}