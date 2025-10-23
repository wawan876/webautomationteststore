import createAccount from "../../../fixtures/createAccount.json";

describe('Register Account', () => {
    beforeEach(() => {
        cy.visitUrl();
    });

    it('Regist Account Valid Data', () => {
        cy.fixture('createAccount').then((createaccount) => {
            cy.registerAccount(createaccount);
            cy.get('.maintext').should('contain.text', 'Your Account Has Been Created!');

        });

    });
})