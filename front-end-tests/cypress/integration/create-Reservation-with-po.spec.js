/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as reserFuncs from '../pages/reservationsPage'
import * as createResFuncs from '../pages/reserNewPage'

var faker = require('faker');

describe('Testsuite', function(){
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()
        loginFuncs.confirmLabel('Login')
        loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    })

    it('Perform a reservation creation', function(){
        dashboardFuncs.viewReservation('Reservations')
        reserFuncs.createResAction('New Reservation')

        //let randomDateCome = recentDate.getFullYear()+'-'+recentDate.getMonth()+'-'+recentDate.getDate()
        //let randomDateLeave = futureDate.getFullYear()+'-'+futureDate.getMonth()+'-'+futureDate.getDate()
        let dateRecent = faker.date.recent();
            var year = dateRecent.getFullYear()
            var month = dateRecent.getMonth()+1
            var date = dateRecent.getDate()+1
        
            if (month < 10) month = '0'+ month
            if (date < 10) date = '0' + date
        
            var randomDateCome = [year,month,date].join('-')
        let dateFuture = faker.date.future();

            var year = dateFuture.getFullYear()
            var month = dateFuture.getMonth()+1
            var date = dateFuture.getDate()+1
            if (month < 10) month = '0'+ month
            if (date < 10) date = '0' + date
        
            var randomDateLeave = [year,month,date].join('-')
        
        
        createResFuncs.createReservation(randomDateCome, randomDateLeave, 'Jonas Hellman (#1)', 'Floor 1, Room 101', 'ID: 1', 'Reservations')

        dashboardFuncs.performLogout('Login')

    })
})