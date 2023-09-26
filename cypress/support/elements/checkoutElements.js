class CheckoutElements {
    stepTitle= () => ".step-title";
    newAddressButton=() => ".new-address-popup > .action > span";
    shipHereButton=() => ".modal-footer > .primary";
    goToPaymentButton= () => ".button.action.continue.primary";
    placeOrderButton= () => ".action.primary.checkout";
    streetField= street => `input[name="${street[0]}]`;
    countrySelect= country_id => `select[name="${country_id}"]`;
    regionSelect= region_id => `select[name="${region_id}"]`;
    cityField= city => `input[name="${city}"]`;
    postalCodeField= postcode => `input[name="${postcode}"]`;
    telephoneField= telephone => `input[name="${telephone}"]`;
}
export default new CheckoutElements();