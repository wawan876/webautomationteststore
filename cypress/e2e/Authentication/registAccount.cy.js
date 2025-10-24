import createAccount from "../../fixtures/createAccount.json";
import { faker } from '@faker-js/faker';
import { generateRegistrationData } from "../../support/data-generator"; 

describe('Register Account', () => {
    beforeEach(() => {
        cy.visitUrl();
    });

    it.only('Regist Account Valid Data', () => {
        const userData = generateRegistrationData();
            cy.registerAccount(userData);
            cy.get('.maintext').should('contain.text', 'Your Account Has Been Created!');

        });
    it.only('Regist Account Already Exists', () => {
       cy.fixture('createAccount').then((createAccount) => {
            cy.registerAccount(createAccount);
            cy.get('.alert.alert-error.alert-danger').should('contain.text', 'Error: E-Mail Address is already registered!');
       });

    })
});