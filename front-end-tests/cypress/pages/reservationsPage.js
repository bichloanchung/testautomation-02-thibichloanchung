/// <reference types="cypress" />

//Elements
const CREATE_RESERVT_BTN = 'h2 > .btn'
const THREE_DOTS_BTN = '.action > img'
const DELETE_BTN = '.menu > :nth-child(2)'

//Functions
function createResAction(content){
    cy.get(CREATE_RESERVT_BTN).click()
    cy.contains(content)
}

function deleteReservation(content){
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    createResAction,
    deleteReservation
}