const commonElements = require('./elements').ELEMENTS;
const loginElements = require('../login/elements').ELEMENTS;
import customerFactory from '../../factories/customerFactory';

Given(/^acesse na home page$/, () => {
    cy.visit(commonElements.url)
    cy.contains('Default welcome msg!')
});

Then(/^deve ser exibida a menssagem "([^"]*)"$/, (message) => {
	cy.contains(message).should('be.visible');
});

When(/^fazer login$/, () => {
	var customer = customerFactory.customer()

    cy.get(commonElements.loginButton).should('be.visible').click()
    cy.url().should('include', loginElements.url)

    cy.get(loginElements.emailField).should('be.visible').type(customer.email)
    cy.get(loginElements.passField).should('be.visible').type(customer.password)
    cy.get(loginElements.signinButton).should('be.visible').click()

    cy.contains(commonElements.loggedMessage,'Welcome, '+customer.firstName+' '+customer.lastName+'!')
});

// Then(/^deve ser exibida a mensagem$/, (datatable) => {
//     datatable.hashes().forEach(element => {
//         cy.contains(element.message).should('be.visible');
//     })
// });