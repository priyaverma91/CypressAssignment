/// <reference types="cypress" />

import {LoginPage} from "../page-objects/login-page";
import {CustomerPage} from "../page-objects/customer-page";
import {CustomerAddressPage} from "../page-objects/customer-address-page";

context('Create Customer with Address', () => {
    const loginPage = new LoginPage();
    const customerPage = new CustomerPage();
    const customerAddressPage = new CustomerAddressPage();
    let firstname = 'Test',
        lastname = 'Customer',
        company = 'DemoComp',
        phone = '1234567891',
        email = 'a@a.com',
        line1 = 'Address line1',
        line2 = 'Address line2',
        city = 'Pune',
        state = 'MH',
        zip = '223344',
        country = 'India';
    let addressLine1 = 'Test Customer, DemoComp';
    let addressLine2 = 'Address line1, Address line2, Pune, MH, 223344, India';
    beforeEach(() => {
        loginPage.navigate();
        loginPage.login();
    })

    it('Test Scenario - 001 : Verify on entering all the fields on customer creation form with Billing address the customer is created and displayed on Customer Creation Form page', () => {
        customerPage.navigate();
        customerPage.SaveCustomerDetails(firstname, lastname, company, phone, email)
        customerAddressPage.navigate();
        customerAddressPage.SaveCustomerAddressDetails(firstname, lastname, company, line1, line2, city, state, zip, country);
        customerPage.verifyBillingAddress(addressLine1, addressLine2);
        customerPage.closeForm();
    })

    it('Test Scenario - 003 : Verify Display Name field value is auto filled when FirstName and LastName entered Customer Creation Form page', () => {
        let firstname = 'Cypress', lastname = 'Name';
        customerPage.navigate();
        customerPage.verifyDisplayName(firstname, lastname);
    })

    it('Test Scenario - 004 : Verify Display Name field value is auto filled when Company name is entered on Customer Creation Form page', () => {
        let company = 'CypressComp';
        customerPage.navigate();
        customerPage.verifyDisplayNameWithCompany(company);
    })
})