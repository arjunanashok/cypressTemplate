/// <reference types="Cypress" />
import { Given } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../pages/loginPage"

const loginPage = new LoginPage();

Given("I am in login page", () => {
    cy.visit("www.asda.com");
    loginPage.acceptCookies();
    loginPage.navigate("/login");
});
