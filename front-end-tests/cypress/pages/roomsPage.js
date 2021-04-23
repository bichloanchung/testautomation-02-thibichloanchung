/// <reference types="cypress" />

//Elements
const CREATE_ROOM_BTN = ':nth-child(1) > .btn'
const THREE_DOTS_BTN = '.action > img'
const EDIT_ROOM_BTN = '.menu > :nth-child(1)'

//Functions
function viewRoomNew(content){
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(content)
}

function editRoomAction(content){
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(EDIT_ROOM_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    viewRoomNew,
    editRoomAction
}