/// <reference types="cypress" />

import {recurse} from "cypress-recurse";

export class LoginPage {

    navigate() {
        cy.visit('/login');
    }

    login() {
        recurse(
            () => cy.get('#1-email').clear().type(Cypress.config('username')),
            ($input) => $input.val() === Cypress.config('username'),
        )
            .should('have.value', Cypress.config('username'));
        recurse(
            () => cy.get('[aria-label="Password"]').clear().type(Cypress.config('password')),
            ($input) => $input.val() === Cypress.config('password'),
        )
            .should('have.value', Cypress.config('password'));
        cy.get('.auth0-label-submit').click();
    }

}