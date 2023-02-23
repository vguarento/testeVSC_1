/// <reference types="cypress" />
const API_URL = Cypress.env('API_BASE_URL')
const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`

it('Acesso site', () => {
    cy.request({
        method:'GET',
        url: `${API_URL}`,
        headers: {authorization}
    });
});