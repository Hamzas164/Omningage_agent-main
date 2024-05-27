Cypress.Commands.add("monitoring", () => {
    cy.get(".fa-solid.fa-eye").click();
    cy.wait(7000);
    cy.get("#omni_monitoring_agent_names_filter_0").click();
    cy.get(".p-dropdown-filter.p-inputtext.p-component").type("Agent A2");
    cy.get("li[aria-label='Agent A2']").click().wait(3000);
    cy.get("#omni_monitoring_dots_3").click().wait(2000);
    cy.contains("Not Ready").click();
  
    // Define the CSS selector
    const stateSelector = '.p-datatable-tbody > tr.ng-tns-c271-24 > :nth-child(2)';
  
    // Wait for the state to exist
    cy.get(stateSelector).should('exist').then(() => {
      // Wait for 10 seconds
      cy.wait(10000);
  
      // Check if the state is "Not ready"
      cy.get(stateSelector).invoke('text').should('include', 'Not ready').then(() => {
        // If the state is found, log a success message
        cy.log('State found within the expected time');
      }).catch(() => {
        // If the state is not found within the expected time, log an error
        cy.log('State element not found within the expected time');
      });
    });
  });
  