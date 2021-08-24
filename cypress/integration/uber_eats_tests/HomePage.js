/// <reference types="Cypress"/>

class HomePage {
    static loadHomePage(){
        cy.visit(Cypress.env('url'))
        //cy.url().should('include', 'ubereats')
    }
}

export default HomePage;