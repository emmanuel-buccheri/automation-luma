import loginElements from '../elements/loginElements';

class LoginPage {
    fillLoginFields(email, password) {
        cy.get(loginElements.emailField()).should('be.visible').type(email)
        cy.get(loginElements.passField()).should('be.visible').type(password)
    }

    submitLogin() {
        cy.get(loginElements.signinButton()).should('be.visible').click()
        cy.reload()
        cy.contains('welcome')
    }
}
export default new LoginPage;