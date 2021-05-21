// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {
    before(() => {
        cy.login(Cypress.env('user').email, Cypress.env('user').password);

        //onbeforeunload
    });
    
    it('Criar um novo artigo', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('a[href$=editor]').click();
    cy.get('input[placeholder="Article Title"]').type('Harry potter');
    cy.get('input[placeholder$="this article about?"]').type('wizard');
    cy.get('form textarea').type('Teste Harry Potter');
    cy.get('input[placeholder="Enter tags"]').type('wizard');
    cy.get('button.btn-primary').contains('Publish Article').click();
    
    cy.get('h1').should('contain.text', 'Harry potter');
    /* ==== End Cypress Studio ==== */
    });    
});

