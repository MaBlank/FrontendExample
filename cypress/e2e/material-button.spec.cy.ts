describe('Navigation to Dashboard from Products', () => {

  it('should navigate to the dashboard and display the Material button', () => {
    // Step 1: Visit the '/products' page.
    cy.visit('http://localhost:4200/products');

    // Step 2: Click on the button to navigate to the dashboard.
    cy.get('button[mat-button]:contains("Go Back")').click();

    // Step 3: Ensure the Material button is displayed with the expected text.
    cy.get('button[mat-raised-button]').should('be.visible').and('have.text', 'Click me!');
  });

});
