/// <reference types="cypress" />

export class HeaderPage {

    verifyLogin(username) {
        cy.get('.MuiTypography-body1').contains(username).should('exist');
    }

}