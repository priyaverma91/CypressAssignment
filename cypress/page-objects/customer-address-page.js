/// <reference types="cypress" />
export class CustomerAddressPage {

    navigate() {
        cy.get('[name="defaultBillingAddress"]').click();
    }

    setFName(firstname) {
        cy.get('.MuiDialogContent-root').within(() => {
            cy.get('[name="firstName"]').clear().type(firstname).should('have.value', firstname);
        });
    }

    setLName(lastname) {
        cy.get('.MuiDialogContent-root').within(() => {
            cy.get('[name="lastName"]').clear().type(lastname).should('have.value', lastname);
        });
    }

    setCompanyName(company) {
        cy.get('.MuiDialogContent-root').within(() => {
            cy.get('[name="company"]').clear().type(company).should('have.value', company);
        });
    }

    setAddressLine1(line1) {
        cy.get('.MuiDialogContent-root').within(() => {
            cy.get('[name="line1"]').clear().type(line1).should('have.value', line1);
        });
    }
    setAddressLine2(line2) {
        cy.get('.MuiDialogContent-root').within(() => {
            cy.get('[name="line2"]').clear().type(line2).should('have.value', line2);
        });
    }

    setCity(city) {
        cy.get('.MuiDialogContent-root').within(() => {
            cy.get('[name="city"]').clear().type(city).should('have.value', city);
        });
    }

    setState(state) {
        cy.get('.MuiDialogContent-root').within(() => {
            cy.get('[name="state"]').clear().type(state).should('have.value', state);
        });
    }

    setZip(zip) {
        cy.get('.MuiDialogContent-root').within(() => {
            cy.get('[name="zip"]').clear().type(zip).should('have.value', zip);
        });
    }
    setCountry(country) {
        cy.get('.MuiDialogContent-root').within(() => {
            cy.get('[name="country"]').clear().type(country).should('have.value', country);
        });
    }

    clickSave() {
        cy.get('.MuiButton-label').contains('Ok').click();
    }
    removeAddress() {
        cy.get('.MuiButton-label').contains('Remove address').click();
    }

    SaveCustomerAddressDetails(firstname, lastname, company, line1, line2,city,state,zip,country) {
        this.setFName(firstname);
        this.setLName(lastname);
        this.setCompanyName(company);
        this.setAddressLine1(line1);
        this.setAddressLine2(line2);
        this.setCity(city);
        this.setState(state);
        this.setZip(zip);
        this.setCountry(country);
        this.clickSave();
    }
}