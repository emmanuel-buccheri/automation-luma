import loginElements from '../elements/loginElements';
const LoginElements = new loginElements;

class LoginPage {
    fillLoginFields(email, password) {
        cy.get(LoginElements.emailField()).should('be.visible').type(email)
        cy.get(LoginElements.passField()).should('be.visible').type(password)
    }

    submitLogin() {
        cy.get(LoginElements.signinButton()).should('be.visible').click()
        // cy.url().should('include', '/customer/account/')
        cy.contains('Welcome, ')
    }
}
export default LoginPage;