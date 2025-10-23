// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('visitUrl', () => {
    cy.visit('https://automationteststore.com/')
})
Cypress.Commands.add('registerAccount', (data) => {
    cy.xpath("//a[.='Login or register']").click()
    cy.xpath("//button[contains(.,'Continue')]").click()
    cy.get('#AccountFrm_firstname').type(data.firstName)
    cy.get('#AccountFrm_lastname').type(data.lastName)
    cy.get('#AccountFrm_email').type(data.email)
    cy.get('#AccountFrm_telephone').type(data.telephone)
    cy.get('#AccountFrm_fax').type(data.fax)
    cy.get('#AccountFrm_company').type(data.company)
    cy.get('#AccountFrm_country_id').select(data.country)
    cy.get('#AccountFrm_zone_id').select(data.region)
    cy.get('#AccountFrm_address_1').type(data.address1)
    cy.get('#AccountFrm_address_2').type(data.address2)
    cy.get('#AccountFrm_city').type(data.city)
    cy.get('#AccountFrm_postcode').type(data.postCode)
    cy.get('#AccountFrm_loginname').type(data.loginName)
    cy.get('#AccountFrm_password').type(data.loginPassword)
    cy.get('#AccountFrm_confirm').type(data.loginPasswordConfirm)
    cy.get("#AccountFrm_newsletter1").click()
    cy.get("#AccountFrm_agree").click()
    cy.xpath("//button[@class='btn btn-orange pull-right lock-on-click']").click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })