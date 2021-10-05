
describe('html layout', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('html layout', ()=>{   
        it('h1 should appear in html file', ()=>{
            cy.get('h1').should('be.visible');
        });
    });
});