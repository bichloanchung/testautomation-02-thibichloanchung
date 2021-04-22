/// <reference types="cypress" />

//Elements
const CREATE_ROOM_BTN = ':nth-child(1) > .btn'

//Functions
function viewRoomNew(content){
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    viewRoomNew
}