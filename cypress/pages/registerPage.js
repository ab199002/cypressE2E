

export class registerPage
{
    weblocators={
        firstName: '#input-firstname',
        lastName : '#input-lastname',
        email : '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continueBtn: 'input[type="submit"]',
        successMessage:'h1'
    }

    openURL()
    {
        cy.visit(Cypress.env('URL'));
    }

    enterFirstName(fName)
    {
        cy.get(this.weblocators.firstName).type(fName);
    }

    enterLastName(lName)
    {
        cy.get(this.weblocators.lastName).type(lName);
    }

    enterEmail(email)
    {
        cy.get(this.weblocators.email).type(email);
    }
    entertelePhoneNumber(mobileNumber)
    {
        cy.get(this.weblocators.telephone).type(mobileNumber);
    }
    enterPassword(password)
    {
        cy.get(this.weblocators.password).type(password);
    }
    enterConfirmPassword(cPassword)
    {
        cy.get(this.weblocators.confirmPassword).type(cPassword);
    }

    selectplocyCheckBox()
    {
        cy.get(this.weblocators.policyCheckbox).check();
    }
    clickConntinueBtn()
    {
        cy.get(this.weblocators.continueBtn).click();
    }

    verifyregisterSuccessful(successMessage)
    {
        cy.get(this.weblocators.successMessage).should('have.text',successMessage);
    }
}