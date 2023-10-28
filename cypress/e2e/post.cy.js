describe('post', () => {
    it('can create post', () => {
        cy.visit('/#/posts');
        cy.get('.RaCreateButton-root').click();
        cy.url().then(url => expect(url).to.contain('/#/posts/create'));

        cy.get('form > .MuiToolbar-root').children().should('be.disabled');
        cy.get('#average_note').should('not.exist');
        cy.get('#title').type('title');
        cy.get('#average_note').should('be.visible');
        cy.get('.ra-input-teaser > .MuiFilledInput-root').type('teaser');
        cy.get('form > .MuiToolbar-root').children().should('not.disabled');
        cy.get('form > .MuiToolbar-root').children().first().click();
        cy.url().then(url => expect(url).to.contain('/#/posts/create'));
        cy.get('#body').type('body');
        cy.get('form > .MuiToolbar-root').children().first().click();
        cy.url().should('match', /.*\/#\/posts\/[0-9]+$/);
    });
});
