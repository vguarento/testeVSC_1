import * as GETBooks from '../requests/GETBooks.request';

describe('GET Books', () => {
    it('Listar todos os livros', () => {
        GETBooks.allBooks().should((Response) => {
            // cy.log(Response.status)
            // cy.log(Response.statusText)
            // cy.log(Response.body)
            expect(Response.status).to.eq(200);
            //expect(Response.body.title).to.eq("O meu lado");
            //expect(Response.body).to.be.not.null;
        })
    });
});
