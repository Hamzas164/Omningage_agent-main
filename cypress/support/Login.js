Cypress.Commands.add("LoginPage", () => {
    // Set the viewport size
    cy.viewport(1450, 800);
  
    // Visit the website with the specified URL
    cy.visit("https://vmo2-qa.omningage.click/");
  
    // Click on the login button
    cy.wait(3000);
    cy.get('#omni_dashboard_login_btn').click();
    cy.wait(20000);
  });
  
  // Ignore uncaught exceptions
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
//  // Intercept the network request
//  cy.intercept("https://qa-1.awsapps.com/auth/**").as("popupUrl");

//  // Handle uncaught exceptions to prevent test failure
//  Cypress.on('uncaught:exception', (err, runnable) => {
//      // Returning false here prevents Cypress from failing the test
//      return false;
//  });

//  // Wait for the intercepted network request
//  cy.wait("@popupUrl", { timeout: 25000 }).then((interception) => {
//      // Get the intercepted request object
//      const request = interception.request;

//      // Visit the popup URL
//      cy.visit(request.url, { qs: request.query });

//      // Use `cy.origin` to handle cross-origin content
//      cy.origin("https://qa-1.awsapps.com", () => {
//          // Wait for the iframe to be fully loaded
//          cy.wait(5000); // Adjust as necessary

//          // Type into the username field
//          cy.get("#wdc_username").type("agent.a3");

//          // Type into the password field
//          cy.get("#wdc_password").type("A12dadf125");

//          // Click the login button
//          cy.get("#wdc_login_button").click();

//          // Wait for the successful login URL
//          cy.url().should("include", "https://qa-1.awsapps.com/");

//          // Wait for additional operations if necessary
//          cy.wait(30000);

//          // After login, return back to the original website
//          cy.visit("https://vmo2-qa.omningage.click/");
//          cy.wait(2000);
//      });
//  });

// //  // Click again on the login button to ensure the popup is not triggered again
// //  cy.get('#omni_dashboard_login_btn').click();

// //  // Wait for redirection
// //  cy.url().should("include", "vmo2-qa.omningage.click");
// //  cy.wait(20000);

// //  // Assert that widgets contain data
// //  cy.get('.cont-stats > .wrapper').should('not.be.empty');
// //  cy.get('.totalTime > h3').should('not.be.empty');
// //  cy.get('.inbound > .wrapper').should('not.be.empty');

// //  // Wait to ensure the page is fully loaded
// // // cy.wait(5000);
// // // cy.get('.mat-button-wrapper').click().wait(2000)
// // // cy.get('#omni_logout_agent_logout_btn').click().wait(4000)
// //  // Reload the page to ensure changes take effect
 

// //  // Make a request with cache control to ensure no caching issues
// //  cy.request({
// //      url: 'https://vmo2-qa.omningage.click/',
// //      method: 'GET',
// //      headers: {
// //          'Cache-Control': 'no-cache'
// //      }