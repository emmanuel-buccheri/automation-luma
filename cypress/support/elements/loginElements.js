class loginElements {

    url= () => { return   '/customer/account/login'}
    emailField= () => { return  '#email'}
    passField= () => { return  '#login-form > .fieldset:nth-child(2) > .field > .control > #pass'}
    signinButton= () => { return  '.fieldset:nth-child(2) > .actions-toolbar > .primary > #send2 > span'}

}
export default loginElements;