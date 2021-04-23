/// <reference types="cypress" />

// Elements
const LOGOUT_BTN = '.user > .btn'
const VIEW_CLIENTS_BTN = '.blocks > :nth-child(2) > .btn'
const VIEW_ROOM_BTN = ':nth-child(1) > .btn'
const VIEW_BILL_BTN = ':nth-child(3) > .btn'

//Functions
function performLogout(content){
    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}

function viewClient(content){
    cy.get(VIEW_CLIENTS_BTN).click()
    cy.contains(content)
}

function viewRoom(content){
    cy.get(VIEW_ROOM_BTN).click()
    cy.contains(content)
}

function viewBill(content){
    cy.get(VIEW_BILL_BTN).click()
    cy.contains(content)
}
//Exports
module.exports ={
    performLogout,
    viewClient,
    viewRoom,
    viewBill
}