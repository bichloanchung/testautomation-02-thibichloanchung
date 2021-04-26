/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as editRoomsFuncs from '../pages/roomEditPage'

import faker from 'faker'

describe('Testsuite', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform last room edition', () =>{
        dashboardFuncs.viewRoom('Rooms')
        roomsFuncs.editRoomAction('Room')
        
        let randomPriceN = faker.commerce.price()
        editRoomsFuncs.editRoomsPrice(randomPriceN,'Rooms')
        cy.log('Last room prices edited')
        
        dashboardFuncs.performLogout('Login')

    })
})