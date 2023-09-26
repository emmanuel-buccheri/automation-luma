import accountElements from '../elements/accountElements';
import { pt_BR, Faker } from '@faker-js/faker';
export const faker = new Faker({
  locale: [pt_BR],
});

class AccountPage {
    fillAccountFields(firstName, lastName, email, pass, confirmPass) {
        if (firstName == 'vazio') {
            cy.get(accountElements.firstNameField()).should('be.visible')
        }
        else {
            cy.get(accountElements.firstNameField()).should('be.visible').type(firstName)
        }

        if (lastName == 'vazio') {
            cy.get(accountElements.lastNameField()).should('be.visible')
        }
        else {
            cy.get(accountElements.lastNameField()).should('be.visible').type(lastName)
        }

        if (email == 'vazio') {
            cy.get(accountElements.emailField()).should('be.visible')
        } 
        else if (email == 'meuemail') {
            cy.get(accountElements.emailField()).should('be.visible').type(faker.internet.email(email))
        }
        else {
            cy.get(accountElements.emailField()).should('be.visible').type(email)
        }

        if (pass == 'vazio') {
            cy.get(accountElements.passField()).should('be.visible')
        }
        else {
            cy.get(accountElements.passField()).should('be.visible').type(pass)
        }

        if (confirmPass == 'vazio') {
            cy.get(accountElements.confirmPassField()).should('be.visible')
        }
        else {
            cy.get(accountElements.confirmPassField()).should('be.visible').type(confirmPass)
        }
    }

    submitAccountForm() {
        cy.get(accountElements.submitButton()).should('be.visible').click()
    }
}
export default new AccountPage;