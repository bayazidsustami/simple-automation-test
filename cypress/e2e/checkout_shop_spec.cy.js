describe('checkout shop feature', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    
        cy.url().should('include', '/inventory.html')
    })

    it('should add item to cart and checkout', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')

        cy.get('.shopping_cart_container').click()
        cy.url().should('include', '/cart.html')

        cy.get('.checkout_button').click()
        cy.url().should('include', '/checkout-step-one.html')

        cy.get('#first-name').type('user first name')
        cy.get('#last-name').type('user last name')
        cy.get('#postal-code').type('90233')

        cy.get('.cart_button').click()
        cy.url().should('include', '/checkout-step-two.html')

        cy.get('.cart_button').click()
        cy.url().should('include', '/checkout-complete.html')

        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        cy.get('#back-to-products').click()
        cy.url().should('include', '/inventory.html')
    })

    it('should add item to cart and failed form checkout', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')

        cy.get('.shopping_cart_container').click()
        cy.url().should('include', '/cart.html')

        cy.get('.checkout_button').click()
        cy.url().should('include', '/checkout-step-one.html')

        cy.get('#first-name').type('{selectall}{backspace}')
        cy.get('#last-name').type('{selectall}{backspace}')
        cy.get('#postal-code').type('{selectall}{backspace}')

        cy.get('.cart_button').click()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-message-container').get('h3').should('contain.text', 'Error: First Name is required')
    })
})