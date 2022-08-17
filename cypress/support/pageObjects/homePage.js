class HomePage {
    go() {
        cy.visit('/')
        cy.url().should('include', 'magento.nublue.co.uk')
    }
}
export default HomePage;