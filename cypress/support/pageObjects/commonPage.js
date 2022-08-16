class Common {
    expectedMessage(message) {
        cy.contains(message).should('be.visible');
    }
}
export default new Common;