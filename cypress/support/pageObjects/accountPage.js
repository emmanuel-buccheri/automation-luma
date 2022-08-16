import accountElements from '../elements/accountElements';
const AccountElements = new accountElements;

import { faker } from '@faker-js/faker/locale/pt_BR';

class AccountPage {
    fillAccountFields(firstName, lastName, email, pass, confirmPass) {
        if (firstName == 'vazio') {
            cy.get(AccountElements.firstNameField).should('be.visible')
        }
        else {
            cy.get(AccountElements.firstNameField).should('be.visible').type(firstName)
        }

        if (lastName == 'vazio') {
            cy.get(AccountElements.lastNameField).should('be.visible')
        }
        else {
            cy.get(AccountElements.lastNameField).should('be.visible').type(lastName)
        }

        if (email == 'vazio') {
            cy.get(AccountElements.emailField).should('be.visible')
        }
        else {
            cy.get(AccountElements.emailField).should('be.visible').type(faker.internet.email(email))
        }

        if (pass == 'vazio') {
            cy.get(AccountElements.passField).should('be.visible')
        }
        else {
            cy.get(AccountElements.passField).should('be.visible').type(pass)
        }

        if (confirmPass == 'vazio') {
            cy.get(AccountElements.confirmPassField).should('be.visible')
        }
        else {
            cy.get(AccountElements.confirmPassField).should('be.visible').type(confirmPass)
        }
    }

    submitAccountForm() {
        cy.get(AccountElements.submitButton).should('be.visible').click()
    }
}
export default AccountPage;