describe('add cart feature', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    })

    it('should add item to cart', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    
        cy.url().should('include', '/inventory.html')
    
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })
    
    it('should add multiple items to cart', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    
        cy.url().should('include', '/inventory.html')
    
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    
        cy.get('.shopping_cart_badge').should('have.text', '3')
    })
});