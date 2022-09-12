import checkoutElements from '../elements/checkoutElements';
const CheckoutElements = new checkoutElements;

class CheckoutPage {
    goToPaymentStep() {
        cy.get(CheckoutElements.goToPaymentButton()).should('be.visible').click()
        cy.contains(CheckoutElements.stepTitle(), 'Payment Method')
    }

    newAddress() {
        cy.get(CheckoutElements.newAddressButton()).click()
    }

    fillShippmentFields(street,country,region,city,postalCode,telephone) {
        cy.get(CheckoutElements.streetField()).should('be.visible').type(street)
        cy.get(CheckoutElements.countrySelect()).should('be.visible').select(country)
        cy.get(CheckoutElements.regionSelect()).should('be.visible').select(region)
        cy.get(CheckoutElements.cityField()).should('be.visible').type(city)
        cy.get(CheckoutElements.postalCodeField()).should('be.visible').type(postalCode)
        cy.get(CheckoutElements.telephoneField()).should('be.visible').type(telephone)
        cy.get(CheckoutElements.shipHereButton()).click()
    }

    placeOrder() {
        cy.get(CheckoutElements.placeOrderButton()).should('be.visible').click()
        cy.url().should('include', '/checkout/onepage/success')
    }
}
export default CheckoutPage;