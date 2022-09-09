class checkoutElements {

    stepTitle= () => { return '.step-title'}
    newAddressButton=() => {return '.new-address-popup > .action > span'}
    shipHereButton=() => {return '.modal-footer > .primary'}
    goToPaymentButton= () => { return '.button.action.continue.primary'}
    placeOrderButton= () => { return '.action.primary.checkout'}
    streetField= () => { return 'input[name="street[0]"]'}
    countrySelect= () => { return 'select[name="country_id"]'}
    regionSelect= () => { return 'select[name="region_id"]'}
    cityField= () => { return 'input[name="city"]'}
    postalCodeField= () => { return 'input[name="postcode"]'}
    telephoneField= () => { return 'input[name="telephone"]'}

}
export default checkoutElements;