const loginElements = require('../login/elements').ELEMENTS;

class LoginPage {
    fillLoginFields(email, password) {
        cy.get(loginElements.emailField).should('be.visible').type(email)
        cy.get(loginElements.passField).should('be.visible').type(password)
    }

    submitLogin() {
        cy.get(loginElements.signinButton).should('be.visible').click()
        // cy.url().should('include', '/customer/account/')
        cy.contains('Welcome, ')
    }
}
export default new LoginPage;