class accountElements {

    url = () => { return  '/customer/account/create/'}
    firstNameField = () => { return  '#firstname'}
    lastNameField = () => { return  '#lastname'}
    emailField = () => { return  '#email_address'}
    passField = () => { return  '#form-validate > .fieldset > .field > .control > #password'}
    confirmPassField = () => { return  '#password-confirmation'}
    submitButton = () => { return  '#form-validate > div > div.primary > button'}

}
export default accountElements;