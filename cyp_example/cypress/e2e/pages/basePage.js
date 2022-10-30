/// <reference types="Cypress" />

export default class BasePage {
    baseUrl = "https://www.asda.com";
    cookieMessage = "button#onetrust-accept-btn-handler";

    navigate(path) {
        cy.visit(this.baseUrl + path)
    }

    acceptCookies(){
        cy.get(this.cookieMessage).click();
    }

    getPageTitle() {
        return cy.title();
    }
}
