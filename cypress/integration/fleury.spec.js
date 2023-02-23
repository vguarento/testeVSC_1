/// <reference types="cypress" />

describe('Fleury', () => {
    it('deve acessar a página web', () => {
        //cy.visit - acessa a página do site
        cy.visit('http://fleury-dev-sp.vm.touchtec.com.br/agendamento/index.action');                
        cy.get('#username > [type="text"]').type('admin');
        cy.get('#password > input').type('teste10');
        cy.get('#login-button').click();
        cy.get('.healsMenuButtonIcon').click();
        cy.get('#menu > div > ul > li:nth-child(2)').click();
        cy.get('#menu > div > div.mainMenuItems > div.submenus-box.active > div > div > ul > li:nth-child(1)').click();
        cy.get('#buscaPaciente > .richselect > table > tbody > tr > :nth-child(1) > .theme-bg6').type('juliene');
        cy.get('.richselect-option-label > p').click();
        cy.wait(3000);
        cy.get('#planoSaudeId > .richselect > table > tbody > tr > :nth-child(1) > .theme-bg6');
        cy.get('[tgroup="Planos Particulares"] > .richselect-option-text > .richselect-option-label').click();
        cy.wait(3000);
        cy.get('#botaoNovaRequisicao > .button-content').click();
        cy.wait(3000);
        cy.get('#produtoAutocomplete > .richselect > table > tbody > tr > :nth-child(1) > .theme-bg6').type('colest');
        cy.wait(3000);
        cy.get(':nth-child(3) > .richselect-option-text > .richselect-option-label').click();
        // cy.get('#marca').type('AM');
        // cy.get('#regional').type('SP');
        // cy.get('#btnAgendarUSD').click();        
        // cy.get('#botaoNovaRequisicao > div.button-content').click();
        // cy.invoke('removeAttr','target').click();

    
    });
});