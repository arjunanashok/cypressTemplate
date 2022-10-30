import { Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";

Given("I am in first step", () =>{
    cy.log("I am in steps executing")
    cy.visit("https://www.arnoldclark.com/")
});
