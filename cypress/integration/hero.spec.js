/// <reference types="cypress" />

describe('Ongs', () => {
    it.skip('deve realizar cadastro', () => {
        //cy.visit - acessa a página do site
        //cy.check()// - acessa material do cypress;
        cy.visit('https://bethehero-frontend.netlify.app/');
        cy.get('.back-link').click();
        cy.get('[placeholder="Nome da ONG"]').type('Dogs famous');
        cy.get('[type="email"]').type('Dogs@gmail.com');
        cy.get('[placeholder="Whatsapp"]').type('11990908787');
        cy.get('[placeholder="Cidade"]').type('Cotia');
        cy.get('[placeholder="UF"]').type('SP');
        
        cy.route('POST', '**/ongs').as('postOng');

        cy.get('.button').click();

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200)
        })

    });

    it.skip('deve realizar login', () => {

        const createOngId = Cypress.env('createdOngId');

        cy.log(createOngId);

        cy.visit('https://bethehero-frontend.netlify.app/');
        cy.get('input').type(createOngId);
        cy.get('.button').click();
    });
});
