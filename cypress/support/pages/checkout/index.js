const checkoutElements = require('../checkout/elements').ELEMENTS;

class CheckoutPage {
    goToPaymentStep() {
        cy.get(checkoutElements.goToPaymentButton).should('be.visible').click()
        cy.contains(checkoutElements.stepTitle, 'Payment Method')
    }

    fillShippmentFields(street,country,region,city,postalCode,telephone) {
        cy.get(checkoutElements.streetField).should('be.visible').type(street)
        cy.get(checkoutElements.countrySelect).should('be.visible').select(country)
        cy.get(checkoutElements.regionSelect).should('be.visible').select(region)
        cy.get(checkoutElements.cityField).should('be.visible').type(city)
        cy.get(checkoutElements.postalCodeField).should('be.visible').type(postalCode)
        cy.get(checkoutElements.telephoneField).should('be.visible').type(telephone)
    }

    placeOrder() {
        cy.get(checkoutElements.placeOrderButton).should('be.visible').click()
        cy.url().should('include', '/checkout/onepage/success')
    }
}
export default new CheckoutPage;