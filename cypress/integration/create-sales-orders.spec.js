/// <reference types="cypress" />


import {LoginPage} from "../page-objects/login-page";
import {SalesPage} from "../page-objects/sales-order-page";
import {CustomerAddressPage} from "../page-objects/customer-address-page";

context('Create SO card', () => {
    const loginPage = new LoginPage();
    const salesPage=new SalesPage();
    const customerAddressPage=new CustomerAddressPage();
    let firstname = 'Test Update',lastname = 'Customer Update', company = 'DemoComp Update',line1='line1 Update',line2='line2 Update',city='Mumbai',state='MH',zip='223344',country='India';
    let customerName='Test Customer',addressName='Test Customer, DemoComp',addressLocation='Address line1, Address line2, Pune, MH, 223344, India';
    let addressNameUpdate='Test Update Customer Update, DemoComp Update',addressLocationUpdate='line1 Update, line2 Update, Mumbai, MH, 223344, India';
    beforeEach(() => {
        loginPage.navigate();
        loginPage.login();
    })

    it('Test Scenario - 007 : Verify existing Customer displayed in dropdown when CustomerName entered on SO Creation form page', () => {
        salesPage.navigate();
        salesPage.createSalesOrderWithExistingCustomer(customerName);
        salesPage.verifyExistingCustomerDetails(addressName,addressLocation);
    })
    it('Test Scenario - 010 : Verify Customer Billing address is updated on SO page', () => {
        salesPage.navigate();
        salesPage.createSalesOrderWithExistingCustomer(customerName);
        salesPage.verifyExistingCustomerDetails(addressName,addressLocation);
        salesPage.navigateSalesAddressUpdate();
        customerAddressPage.SaveCustomerAddressDetails(firstname, lastname, company, line1, line2,city,state,zip,country);
        salesPage.verifyExistingCustomerDetails(addressNameUpdate,addressLocationUpdate);
        salesPage.closeForm();
    })
    it('Test Scenario - 011 : Verify Customer Billing and Shipping address is deleted on SO page', () => {
        salesPage.navigate();
        salesPage.createSalesOrderWithExistingCustomer(customerName);
        salesPage.verifyExistingCustomerDetails(addressName,addressLocation);
        salesPage.navigateSalesAddressUpdate();
        customerAddressPage.removeAddress();
        salesPage.verifyAddressRemoved();
    })

})