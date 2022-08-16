const productElements = require('../elements/productElements').ELEMENTS;

class ProductPage {
    setQuantity(quantity) {
        cy.get(productElements.quantityField).should('be.visible')
            .invoke('attr', 'value', quantity)
            .should('have.attr', 'value', quantity)
    }

    addToCart(product) {
        cy.get(productElements.addToCartButton).should('be.visible').click()
        cy.contains('You added ' + product + ' to your shopping cart.').should('be.visible')
    }
}
export default new ProductPage;