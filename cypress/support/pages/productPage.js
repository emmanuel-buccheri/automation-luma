import productElements from '../elements/productElements';
const ProductElements = new productElements;

class ProductPage {
    setQuantity(quantity) {
        cy.get(ProductElements.quantityField()).should('be.visible')
            .invoke('attr', 'value', quantity)
            .should('have.attr', 'value', quantity)
    }

    addToCart(product) {
        cy.get(ProductElements.addToCartButton()).should('be.visible').click()
        cy.wait(3000)
        cy.contains('You added ' + product + ' to your shopping cart.').should('be.visible')
    }
}
export default ProductPage;