export class homePage
{
    weblocators={
        searchBox: '.form-control.input-lg',
        clickSearchBtn: '.btn.btn-default.btn-lg',
        productTitle: 'img[title="MacBook"]',
        addtoCart: 'div[id="content"] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1)',
        successMessage: 'div alert.alert-success.alert-dismissible'
    }

    searchProduct(productName)
    {
        cy.get(this.weblocators.searchBox).type(productName);
        cy.get(this.weblocators.clickSearchBtn).click();
    }

    addproductTocart()
    {
        cy.get(this.weblocators.addtoCart).click();
    }

    verifySuccessMessage()
    {
        return cy.get(this.weblocators.successMessage);
    }

}