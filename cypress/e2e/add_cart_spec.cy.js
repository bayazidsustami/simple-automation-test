describe('add cart feature', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    
        cy.url().should('include', '/inventory.html')
    })

    it('should add item to cart', () => {

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it('should add item to cart and remove cart', () => {
        
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')

        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('not.exist')
    })
    
    it('should add multiple items to cart', () => {
    
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    
        cy.get('.shopping_cart_badge').should('have.text', '3')
    })

    it('should sort catalogue from name A to Z', () => {
        cy.get('.product_sort_container').select('Name (A to Z)')
        cy.get('.inventory_item').first().get('.inventory_item_name ').first().should('have.text', 'Sauce Labs Backpack')
    })

    it('should sort catalogue from name Z to A', () => {
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.get('.inventory_item').first().get('.inventory_item_name ').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    })

    it('should sort catalogue from Price (low to high)', () => {
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('.inventory_item').first().get('.inventory_item_name ').first().should('have.text', 'Sauce Labs Onesie')
    })

    it('should sort catalogue from Price (high to low)', () => {
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.get('.inventory_item').first().get('.inventory_item_name ').first().should('have.text', 'Sauce Labs Fleece Jacket')
    })

});