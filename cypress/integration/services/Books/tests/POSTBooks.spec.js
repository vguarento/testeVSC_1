import * as POSTBooks from '../requests/POSTBooks.request';

describe('POST Books', () => {
    it('Adicionar livro', () => {
        POSTBooks.addBook().should((Response) => {
            // cy.log(Response.status)
            // cy.log(Response.statusText)
            // cy.log(Response.body)
            expect(Response.status).to.eq(200);
            expect(Response.body.title).to.eq("O meu lado");
        })
    });
});
