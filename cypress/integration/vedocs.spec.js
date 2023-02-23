/// <reference types="cypress" />

describe('Vedocs', () => {
    it('deve realizar cadastro', () => {
        //cy.visit - acessa a página do site
        cy.visit('https://qa-vedocs.vm.touchtec.com.br/login/');
        cy.get('#buttonGroupMedicoPaciente > :nth-child(2)').click();
        cy.get('a > .btn').click();
        cy.get('#formBasicEmail').type('admin');
        cy.get('#formBasicPassword').type('teste100');
        cy.get('#formCheckTermoResponsabilidade').click();
        cy.get('.btn > .centerByMargins').click();
        
    });
    });