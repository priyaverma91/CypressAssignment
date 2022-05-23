/// <reference types="cypress" />
import { recurse } from 'cypress-recurse'

export class CustomerPage {

    navigate() {
        cy.get('.MuiFab-label').find('path').should('exist').click();
        cy.get('.MuiListItemText-root').contains('Customer').click();
    }

    setFName(firstname) {
        recurse(
            () => cy.get('[name="firstName"]').clear().type(firstname),
            ($input) => $input.val() === firstname,
        )
            .should('have.value', firstname);
    }

    setLName(lastname) {
        recurse(
            () => cy.get('[name="lastName"]').clear().type(lastname+'{shift}{enter}'),
            ($input) => $input.val() === lastname,
        )
            .should('have.value', lastname);
    }

    setCompanyName(company) {
        recurse(
            () => cy.get('[name="company"]').clear().type(company),
            ($input) => $input.val() === company,
        )
            .should('have.value', company);
    }

    setPhone(phone) {
        recurse(
            () => cy.get('[name="phone"]').clear().type(phone),
            ($input) => $input.val() === phone,
        )
            .should('have.value', phone);
    }


    setEmail(email) {
        recurse(
            () => cy.get('[name="email"]').clear().type(email),
            ($input) => $input.val() === email,
        )
            .should('have.value', email);
    }
    verifyBillingAddress(addressLine1,addressLine2){
        cy.get('[data-testid="textContactInformation"]').contains(addressLine1,{ matchCase: false })
        cy.get('[data-testid="textAddressInformation"]').contains( addressLine2,{ matchCase: false });
    }

    SaveCustomerDetails(firstname,lastname,company,phone,email) {
        this.setFName(firstname);
        this.setLName(lastname);
        this.verifyDisplayNameValue(firstname,lastname)
        this.setCompanyName(company);
        this.setPhone(phone);
        this.setEmail(email);
    }
    verifyDisplayNameValue(firstname,lastname){
        let expectedDisplayName=firstname+" "+lastname;
        cy.get('[name="lastName"]').type('{shift}{enter}');
        cy.get('[name="name"]').should('have.value', expectedDisplayName);
    }
    verifyDisplayName(firstname,lastname){
        let expectedDisplayName=firstname+" "+lastname;
        this.setFName(firstname);
        this.setLName(lastname);
        cy.get('[name="name"]').should('have.value', expectedDisplayName);
    }
    verifyDisplayNameWithCompany(company){
        this.setCompanyName(company);
        cy.get('[name="firstName"]').click();
        cy.get('[name="name"]').should('have.value', company);
    }
    closeForm(){
        cy.get('.MuiIconButton-label').eq(4).find('path').click();
    }
}