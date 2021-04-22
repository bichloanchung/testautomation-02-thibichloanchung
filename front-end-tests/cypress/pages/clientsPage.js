/// <reference types="cypress" />

//Elements
const CREATE_CLIENT_BTN = 'h2 > .btn'
const CLIENT_LIST = '.client'

const THREE_DOTS_BTN = '.action > img'
const EDIT_BTN = '.menu > :nth-child(1)'

//Functions
function viewClientNew(content){
    cy.get(CREATE_CLIENT_BTN).click()
    cy.contains(content)
}

function verifyLastClient(name,email,phone){
    cy.get(CLIENT_LIST).last()
    .should('contain', name)
    .and('contain', email)
    .and('contain', phone)
}

function editClientAction(content){
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(EDIT_BTN).click()
    cy.contains(content)
}

//Exports
module.exports = {
    viewClientNew,
    verifyLastClient,
    editClientAction
}