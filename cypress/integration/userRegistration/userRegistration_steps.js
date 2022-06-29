const el = require('./elements').ELEMENTS;
// import customerFactory from '../../factories/customerFactory';
import { faker } from '@faker-js/faker/locale/pt_BR';


When(/^tente criar uma conta$/, (datatable) => {
    // var customer = customerFactory.customer()

    cy.contains(el.createAccountButton,'Create an Account').should('be.visible').click()
    cy.url().should('include', el.url)

    // cy.get(el.firstNameField).should('be.visible').type(customer.firstName)
    // cy.get(el.lastNameField).should('be.visible').type(customer.lastName)
    // cy.get(el.emailField).should('be.visible').type(customer.email)
    // cy.get(el.passField).should('be.visible').type(customer.password)
    // cy.get(el.confirmPassField).should('be.visible').type(customer.password)
    // cy.get(el.submitButton).should('be.visible').click()

    datatable.hashes().forEach(element => {
        cy.get(el.firstNameField).should('be.visible').type(element.firstName)
        cy.get(el.lastNameField).should('be.visible').type(element.lastName)

        if (element.email == 'vazio') {
            cy.get(el.emailField).should('be.visible').type('')
        }
        else {
            cy.get(el.emailField).should('be.visible').type(faker.internet.email(element.email))
        }

        cy.get(el.passField).should('be.visible').type(element.pass)
        cy.get(el.confirmPassField).should('be.visible').type(element.confirmPass)
        cy.get(el.submitButton).should('be.visible').click()
    })
});


Then(/^deve ser exibida a mensagem$/, (datatable) => {
    datatable.hashes().forEach(element => {
        cy.contains(element.message).should('be.visible');
    })
});


When(/^tente criar uma conta com "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstName,lastName,email,pass,confirmPass) => {
	// console.log(firstName,lastName,email,pass,confirmPass);

    // var customer = customerFactory.customer()

    cy.contains(el.createAccountButton,'Create an Account').should('be.visible').click()
    cy.url().should('include', el.url)
	
    if (firstName == 'vazio') {
        cy.get(el.firstNameField).should('be.visible')
    }
    else {
        cy.get(el.firstNameField).should('be.visible').type(firstName)
    }

    if (lastName == 'vazio') {
        cy.get(el.lastNameField).should('be.visible')
    }
    else {
        cy.get(el.lastNameField).should('be.visible').type(lastName)
    }

    if (email == 'vazio') {
        cy.get(el.emailField).should('be.visible')
    }
    else {
        cy.get(el.emailField).should('be.visible').type(faker.internet.email(email))
    }

    if (pass == 'vazio') {
        cy.get(el.passField).should('be.visible')
    }
    else {
        cy.get(el.passField).should('be.visible').type(pass)
    }

    if (confirmPass == 'vazio') {
        cy.get(el.confirmPassField).should('be.visible')
    }
    else {
        cy.get(el.confirmPassField).should('be.visible').type(confirmPass)
    }

    cy.get(el.submitButton).should('be.visible').click()
});


Then(/^deve ser exibida a menssagem "([^"]*)"$/, (message) => {
	// console.log(args1);
	cy.contains(message).should('be.visible');
});
