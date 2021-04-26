/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as createRoomFuncs from '../pages/roomNewPage'

var faker = require('faker');

let randomRoom = faker.datatype.number();
let randomFloor = faker.datatype.hexaDecimal();
let randomPrice = faker.commerce.price();

describe('Testsuite', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform a new room creation', () =>{
        dashboardFuncs.viewRoom('Rooms')
        roomsFuncs.viewRoomNew('New Room')

        cy.log('create room with some random values')
        createRoomFuncs.createNewRoom('Twin', randomRoom, randomFloor, randomPrice, 'Balcony', 'Rooms')

        dashboardFuncs.performLogout('Login')

    })
})