const accountElements = require('./elements').ELEMENTS;
const commonElements = require('../common/elements').ELEMENTS;

import { faker } from '@faker-js/faker/locale/pt_BR';

When(/^tente criar uma conta$/, (datatable) => {
    cy.contains (commonElements.createAccountButton,'Create an Account').should('be.visible').click()
    cy.url().should('include', accountElements.url)

    datatable.hashes().forEach(element => {
        cy.get (accountElements.firstNameField).should('be.visible').type(element.firstName)
        cy.get (accountElements.lastNameField).should('be.visible').type(element.lastName)

        if (element.email == 'vazio') {
            cy.get (accountElements.emailField).should('be.visible').type('')
        }
        else {
            cy.get (accountElements.emailField).should('be.visible').type(faker.internet.email(element.email))
        }

        cy.get (accountElements.passField).should('be.visible').type(element.pass)
        cy.get (accountElements.confirmPassField).should('be.visible').type(element.confirmPass)
        cy.get (accountElements.submitButton).should('be.visible').click()
    })
});

When(/^tente criar uma conta com "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstName,lastName,email,pass,confirmPass) => {
    cy.contains (commonElements.createAccountButton,'Create an Account').should('be.visible').click()
    cy.url().should('include', accountElements.url)
	
    if (firstName == 'vazio') {
        cy.get (accountElements.firstNameField).should('be.visible')
    }
    else {
        cy.get (accountElements.firstNameField).should('be.visible').type(firstName)
    }

    if (lastName == 'vazio') {
        cy.get (accountElements.lastNameField).should('be.visible')
    }
    else {
        cy.get (accountElements.lastNameField).should('be.visible').type(lastName)
    }

    if (email == 'vazio') {
        cy.get (accountElements.emailField).should('be.visible')
    }
    else {
        cy.get (accountElements.emailField).should('be.visible').type(faker.internet.email(email))
    }

    if (pass == 'vazio') {
        cy.get (accountElements.passField).should('be.visible')
    }
    else {
        cy.get (accountElements.passField).should('be.visible').type(pass)
    }

    if (confirmPass == 'vazio') {
        cy.get (accountElements.confirmPassField).should('be.visible')
    }
    else {
        cy.get (accountElements.confirmPassField).should('be.visible').type(confirmPass)
    }

    cy.get (accountElements.submitButton).should('be.visible').click()
});