/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { HeaderPage } from "../page-objects/header-page";

context('Login Katana application', () => {
    const loginPage = new LoginPage();
    const header = new HeaderPage();

    beforeEach(() => {
        loginPage.navigate();
    })
    
    it('Login using username and password', () => {
        let username = 'Demo User';
        loginPage.login();
        header.verifyLogin(username);
    })
})