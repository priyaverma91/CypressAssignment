/// <reference types="cypress" />
export class SalesPage {

    navigate() {
        cy.get('.MuiFab-label').find('path').should('exist').click();
        cy.get('.MuiListItemText-root').contains('Sales order').click();
    }

    searchEmployee(customerName) {
        cy.get('input[placeholder="Search or create customer"]')
            .type(customerName);
        cy.wait(2000);
        cy.get('.MuiAutocomplete-option')
            .find('span').eq(0)
            .click();
    }
    verifyExistingCustomerDetails(addressName, addressLocation) {
        cy.get('[data-testid="address-field-name"]').contains(addressName, {
            matchCase: false
        })
        cy.get('[data-testid="address-field-location"]').contains(addressLocation, {
            matchCase: false
        });
    }

    createSalesOrderWithExistingCustomer(customerName) {
        this.searchEmployee(customerName)
    }

    navigateSalesAddressUpdate() {
        cy.get('[data-testid="address-field-location"]').click();
    }

    closeForm() {
        cy.get('.MuiIconButton-label').eq(5).find('path').click();
    }

    verifyAddressRemoved() {
        cy.get('[data-testid="address-field-name"]').should('not.have.value', '')
    }
}