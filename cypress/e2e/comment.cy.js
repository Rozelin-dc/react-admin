describe('comment', () => {
    it('can create new comment', () => {
        cy.visit('/#/comments');
        cy.get('.RaCreateButton-root').click();
        cy.url().should('contain', '/#/comments/create');

        cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').should(
            'be.disabled'
        );
        cy.get('#post_id').click();
        cy.get('[data-value="9"]').click();
        cy.get('#author\\.name').type('test author');
        cy.get('.ra-input-body > .MuiFilledInput-root').type('test body');
        cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click();

        cy.get('[href="#/posts"]').click();
        cy.get(':nth-child(5) > .column-id').click();
        cy.url().should('contain', '/#/posts/9');
        cy.get('#tabheader-3').click();
        cy.get('.RaDatagrid-rowEven > .column-author\\.name').then($author => {
            expect(Cypress.$($author).text()).to.eq('test author');
        });
        cy.get('.RaDatagrid-rowEven > .column-body').then($body => {
            expect(Cypress.$($body).text()).to.eq('test body');
        });
    });
});
