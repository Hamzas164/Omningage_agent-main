// cypress/support/commands.js

Cypress.Commands.add("Outbound", (env = 'qa') => {
  // Define the base URLs for different environments
  const baseUrls = {
    qa: "https://qa-url.com",
    prod: "https://prod-url.com"
  };

  // Ensure the env variable is valid
  if (!baseUrls[env]) {
    throw new Error(`Invalid environment: ${env}`);
  }

  const phoneNumber = "+442045586680"; // Dummy phone number

  cy.log("Outbound Call Initiation");
  cy.wait(5000);

  // Example: Visit the base URL based on the environment
  // cy.visit(baseUrls[env]);
  
  initiateOutboundCall(phoneNumber);
  handleCallAndInteraction(phoneNumber);
  manageFavorites();
});

// Function to initiate an outbound call
function initiateOutboundCall(phoneNumber) {
  cy.get("#omni_dialpad_button").click();
  cy.contains(phoneNumber).click();
  cy.wait(6000);
  cy.get("#omni_phone_number_phone_dial").click();
  cy.wait(10000); // Wait for manual call acceptance
  cy.get('.end-call-btn > .material-icons').click(); // End the call
  cy.wait(10000);
}

// Function to handle call and subsequent interactions
function handleCallAndInteraction(phoneNumber) {
  cy.get("#omni_dialpad_button").click();
  cy.wait(5000);
  cy.get('#mat-tab-label-3-0').click();
  cy.wait(7000);
  cy.get("#omni_global_search_recent").type(phoneNumber);
  cy.wait(3000);
  cy.contains(phoneNumber).click();
  cy.get("#omni_phone_number_phone_dial").click();
  cy.wait(5000);
  cy.get("button.mat-tooltip-trigger.end-call-btn").click();
  cy.wait(7000);
}

// Function to manage favorite contacts
function manageFavorites() {
  cy.get("#omni_dialpad_button").click();
  cy.get('#omni_add_to_favourites_0, #omni_remove_from_favourites_0').then($element => {
    if ($element.is('#omni_add_to_favourites_0')) {
      cy.get('#omni_add_to_favourites_0').click({ force: true });
    } else {
      cy.get('#omni_remove_from_favourites_0').click({ force: true });
    }
  });

  cy.wait(3000);
  cy.get('#mat-tab-label-4-2 > .mat-tab-label-content').click();
  cy.wait(3000);
  cy.contains("Hamza").click().wait(1000);
  cy.get("#omni_delete_favourite").click({ force: true });
}
