Cypress.Commands.add("Search_fav", () => {
  const agentName = "Agent B1"; // Placeholder agent name
 
  // Click on the search input field and type the provided agent name
  cy.get('#omni_agent_search').click().clear().type(agentName).wait(3000);
 
  // Wait for the agent to appear in the search results and click on the favorite star
  cy.get("#omni_agent_favorite_star_0").click({ force: true });
  cy.wait(4000);
 
  // Clear the search field and type the agent name again
  cy.get('#omni_agent_search').clear().type(agentName);
cy.wait(3000);
  // Wait for the agent to appear in the search results and click on the unfavorite star
  cy.get(".mat-tooltip-trigger.material-icons[mattooltip='Unfavorite']").click({force:true}).wait(3000)
 // cy.get("#omni_agent_unfavorite_star_0").click({ force: true });
  cy.wait(3000);
 
  // Click on the favorite message button and send a message
  cy.get("#omni_agent_favorite_message_0").click({ force: true });
  cy.wait(4000);
  cy.get("#omni_internal_chat_type_message").type("Message from Cypress");
  cy.get("#omni_internal_chat_send_message").click();
  cy.wait(4000);
 
  // Click on the internal chat filter dropdown and select a status
  cy.get("#omni_internal_chat_filter_dropdown").click();
  cy.get("#omni_internal_chat_state_name_1").click();
  cy.wait(3000);
 
  // Click on the chatbox header and send another message
  cy.get("div[class='chat_ib'] h5").click({ multiple: true });
  cy.get("#omni_internal_chat_type_message").type("Message after selecting status");
  cy.get("#omni_internal_chat_send_message").click();
});
 