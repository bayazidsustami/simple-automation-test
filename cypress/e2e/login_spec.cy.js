describe('Login & Logout Feature', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('should login with valid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')
  })

  it('should not login with invalid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('invalid_password')
    cy.get('#login-button').click()

    cy.get('.error-message-container').should('be.visible')
    cy.get('.error-message-container').get('h3')
      .should('contain.text','Epic sadface: Username and password do not match any user in this service')
  })

  it('should not login with locked credentials', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.error-message-container').should('be.visible')
    cy.get('.error-message-container').get('h3')
      .should('contain.text','Epic sadface: Sorry, this user has been locked out.')
  })

  it('should login with valid credentials & can logout', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')

    cy.get('.primary_header').get('#menu_button_container').get('.bm-burger-button').click()
    cy.get('.primary_header').get('#menu_button_container')
      .get('.bm-menu-wrap').get('.bm-menu').get('.bm-item-list').get("#logout_sidebar_link").click()
    cy.url().should('include', '/')
  })
})
