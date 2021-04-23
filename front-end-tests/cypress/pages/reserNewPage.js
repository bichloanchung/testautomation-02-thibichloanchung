/// <reference types="cypress" />

//Elements
const DATE_START_FIELD = ':nth-child(1) > input'
const DATE_END_FIELD = ':nth-child(2) > input'
const CLIENT_SELLECT = ':nth-child(3) > select'
const ROOM_CLIENT = ':nth-child(4) > select'
const BILL_SELECT = ':nth-child(5) > select'
const SAVE_BTN = '.blue'

//Functions
function createReservation(startdate, enddate, client, room, bill, content){
    cy.get(DATE_START_FIELD).type(startdate)
    cy.get(DATE_END_FIELD).type(enddate)
    cy.get(CLIENT_SELLECT).select(client)
    cy.get(ROOM_CLIENT).select(room)
    cy.get(BILL_SELECT).select(bill)
    cy.get(SAVE_BTN).click()
    cy.contains(content)

}

//Exports
module.exports = {
    createReservation
    
}