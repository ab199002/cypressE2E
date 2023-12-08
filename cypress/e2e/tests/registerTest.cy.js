import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerData.json'

const registerPageObj = new registerPage();
describe('test automation',()=>{



    it('register flow ', ()=>{

        registerPageObj.openURL();
        registerPageObj.enterFirstName(registerData.firstName);
        registerPageObj.enterLastName(registerData.LastName);
        cy.log(registerData.email+Date.now().toString+registerData.emailDomain);
        registerPageObj.enterEmail(registerData.email+Date.now()+registerData.emailDomain);
        registerPageObj.entertelePhoneNumber(registerData.telephoneNumber);
        registerPageObj.enterPassword(registerData.Password);
        registerPageObj.enterConfirmPassword(registerData.Password);
        registerPageObj.selectplocyCheckBox();
        registerPageObj.clickConntinueBtn();
        registerPageObj.verifyregisterSuccessful(registerData.successMessage);


    })
})