import { Then } from "@badeball/cypress-cucumber-preprocessor";
import accountPage from '../pages/accountPage'
import headerPage from '../pages/headerPage'

Then("tente criar uma conta com {string}", (firstName,lastName,email,pass,confirmPass) => {
    headerPage.openSingUp()
    accountPage.fillAccountFields(firstName,lastName,email,pass,confirmPass)
    accountPage.submitAccountForm()
});