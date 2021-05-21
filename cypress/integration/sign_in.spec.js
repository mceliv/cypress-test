


describe('Autenticação', () => {
    it('Criar login com usuário e senha válidos', () => {
        //acessar o site
        cy.visit('/');
        
        //clicar no Sign In
        cy.get('.nav-link')
            .contains('Sign in')
            .click();
        
        // Preencher usuario e senha
        cy.get('input[type=email').type(Cypress.env('user').email);
        cy.get('input[type=password').type(Cypress.env('user').password);
        
        //Clicar no login
        cy.get('button.btn-primary').click();

        // verificar se você foi autenticado
        cy.get('.nav-pills a.nav-link')
            .should('have.length', 2);

        cy.get('.nav-pills a.nav-link')
            .eq(0)
            .should('contain.text', 'Your Feed');
    });
});