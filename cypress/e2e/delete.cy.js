describe('delete post', () => {
    it('delete top post', () => {
        cy.visit('/#/posts');
        const post = cy.get('.MuiTableBody-root > :nth-child(1) > .column-id');
        let id = '';
        post.then($child => {
            id = Cypress.$($child).text();
        });
        cy.task('log', `id: ${id}`);
        post.click();
        cy.task('log', `next url: /#/posts/${id}`);
        cy.url().then(url => expect(url).to.contain(`/#/posts/${id}`));

        cy.get('.ra-delete-button').click();
        cy.url().then(url => expect(url).to.contain('/#/posts'));

        let newId = '';
        cy.get('.MuiTableBody-root > :nth-child(1) > .column-id').then(
            $child => {
                newId = Cypress.$($child).text();
                expect(newId).to.not.eq(id);
            }
        );
        cy.task('log', `newId: ${newId}`);
    });
});
