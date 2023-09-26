class AccountElements {
    url = () => "/customer/account/create/";
    firstNameField = () => "#firstname";
    lastNameField = () => "#lastname";
    emailField = () => "#email_address";
    passField = () => "#form-validate > .fieldset > .field > .control > #password";
    confirmPassField = () => "#password-confirmation";
    submitButton = () => "#form-validate > div > div.primary > button";
}
export default new AccountElements();