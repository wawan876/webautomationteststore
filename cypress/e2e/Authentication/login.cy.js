import login from "../../fixtures/login.json";
import { faker } from '@faker-js/faker';
import { generateRegistrationData } from "../../support/data-generator"; 


describe('Login', () => {
    beforeEach(() => {
        cy.visitUrl();
    });

    it('Login Valid', () => {
        cy.fixture('login').then((loginData) => {
            cy.Login(loginData);
            cy.xpath('//span[.="My Account"]').should('contain.text', 'My Account');
        })
        
    });
});