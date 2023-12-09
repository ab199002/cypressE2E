import { homePage } from "../../pages/homePage"
import testData from '../../fixtures/testData.json'
const homepageobj = new homePage();

describe('test automation',()=>{
    before(()=>{
        cy.login(testData.login.userName,testData.login.password);
    })

    it('add to cart flow',()=>{

      
        homepageobj.searchProduct(testData.Product.productName);
        homepageobj.addproductTocart();
        homepageobj.verifySuccessMessage().should('contain',testData.Message.successMessage);



    })
})