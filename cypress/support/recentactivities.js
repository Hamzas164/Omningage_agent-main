Cypress.Commands.add("recent", () => {
  // Click on "Recent Activities"
  cy.contains("Recent Activities").click({ force: true }).then(() => {
    // Wait for the recent activities section to load
    cy.wait(5000);

    // Click on the "Edit Note" button
    cy.get("#omni_edit_note_buttons_3").click({ force: true });
    cy.wait(5000);

    // Clear and update the notes
    cy.get("textarea[type='text']").clear().type("Notes get updated");
    cy.contains("Update").click();
    cy.wait(4000);

    // Click on the CRM button in recent activities
    cy.get("#omni_widgets_recentActiv_crm_buttons_3").click({ force: true });
    cy.wait(6000);

    // Click on "Cancel" in CRM view
    cy.get('#omni_crm_dialog_cancel_btn').click();
    cy.wait(2000);

    // Click on the dropdown button
    cy.get("#omni_drop_down_buttons_22").click({ force: true }).wait(2000);

    // Click on the search button
    cy.get("#omni_search_text_buttons_22").click();
    cy.wait(2000);

    // Search for "Inbound" and select checkbox
    cy.get("#omni_search_text_inputfield_22").type("Inbound");
    cy.wait(2000);
    cy.get("#omni_checkbox_22").click();
    cy.wait(2000);

    // Save the search filter
    cy.get("#omni_save_button_22").click({ force: true });
    cy.wait(3000);

    // Add a tag
    cy.get("#omni_add_tag_button_22").click({ force: true }).wait(1000);
    cy.get("#omni_search_text_tag_22").type("demo");
    cy.wait(1500);
    cy.get("#omni_update_tag_22").click();
    cy.wait(1000);
    cy.get("#omni_save_button_22").click({ force: true });
    cy.wait(2000);

    // Click on the dropdown button again
    cy.get("#omni_drop_down_buttons_1").click({ force: true }).wait(2000);

    // Call the function to click the chat transfer button and download transcript
    clickChatTransferButton(0);
  });
});

// Function to recursively click the chat transfer button
function clickChatTransferButton(interactionIndex) {
  if (interactionIndex <= 26) {
    // Construct the locator for each interaction
    const interactionLocator = `#omni_drop_down_buttons_${interactionIndex}`;

    // Click on the dropdown button for this interaction
    cy.get(interactionLocator).click({ force: true }).then(() => {
      // Construct the locator for the chat transfer button for this interaction
      const chatTransferLocator = `#omni_chat_transfer_buttons_${interactionIndex}`;
      
      // Check if chat transfer button exists for this interaction
      cy.get(chatTransferLocator).then($element => {
        if ($element.length > 0) {
          // If chat transfer button is found, click it and execute subsequent code
          cy.get(chatTransferLocator).click({ force: true }).wait(4000);
          cy.wait(2000); // Apply wait as needed
          cy.get("#omni_chat_history_download_btn").click({ force: true }).wait(4000); // Forcefully click the download button
          cy.get("#omni_chat_history_convert_pdf").click();
          
          // Terminate the loop after downloading the chat transcript
          return;
        }
      }).then(() => {
        // Move to the next interaction
        if (interactionIndex === 0) {
          // Stop the loop after the first download
          return;
        } else {
          clickChatTransferButton(interactionIndex + 1);
        }
      });
    });
  }
}
