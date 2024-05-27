Cypress.Commands.add("interaction", () => {
    cy.get(".fa-solid.fa-folder-tree").click();
    cy.wait(3000);
  
    // Open the date picker
    cy.get("#omni_ie_selected_date_format").click().wait(2000);
  
    // Navigate to the correct month if necessary (example: go to the previous month)
    // cy.get('.p-datepicker-prev').click(); // Uncomment and modify if needed
  
    // Select the specific date "1"
    cy.get('td:not(.p-datepicker-other-month) span').contains('1').click({ force: true });
    cy.wait(2000);
  
    // Open the second date picker and select the current date
    cy.get("#omni_ie_selected_date_format_1").click().wait(4000);
    cy.get('.p-datepicker-today > .p-ripple').click({ force: true }).wait(2000);
  
    // Additional interaction steps
    cy.get("#omni_ie_duration_button").click().wait(2000);
    cy.get("label[for='id0-input'] span.mat-radio-outer-circle").click().wait(1000);
    cy.get("#omni_ie_greater_than").type("5").wait(1000);
    cy.get("#omni_ie_greater_than_minutes").click();
    cy.get("label[for='omni_ie_radio_2-input'] span.mat-radio-outer-circle").click();
  
    // Select queue filters
    cy.get("#omni_ie_queue_selected_name").click({ force: true });
    cy.get("#omni_ie_queue_search").type("live").wait(2000);
    cy.get(".mat-checkbox-inner-container").click();
    cy.get("#omni_ie_queue_search").clear().type("email").wait(2000);
    cy.get("label[for='omni_ie_queue_checkbox_0-input'] span.mat-checkbox-inner-container").click().wait(2000);
    cy.get("#omni_ie_queue_selected_name").click({ force: true });
  
    // Select agent filters
    cy.get("#omni_ie_agent_btn").click().wait(2000);
    cy.get("#omni_ie_agent_search").type("Agent A1").wait(2000);
    cy.get(".mat-checkbox-inner-container").click();
    cy.get("#omni_ie_agent_search").clear().type("Agent A2").wait(2000);
    cy.get(".mat-checkbox-inner-container").click();
    cy.get("#omni_ie_agent_btn").click({ force: true }).wait(2000);
  
    // Select wrap-up codes
    cy.get("#omni_ie_wrapup_selected").click();
    ["13", "14", "15", "16"].forEach(id => {
        cy.get(`label[for='omni_ie_wrapup_checkbox_${id}-input'] span.mat-checkbox-inner-container`).click();
    });
    cy.get("#omni_ie_wrapup_selected").click({ force: true }).wait(2000);
  
    // Select tags
    cy.get("#omni_ie_tags_selected").click();
    [0, 1, 2, 3, 4].forEach(id => {
        cy.get(`label[for='omni_ie_tags_checkbox_${id}-input'] span.mat-checkbox-inner-container`).click().wait(1000);
    });
    cy.get("#omni_ie_tags_selected").click({ force: true }).wait(2000);
  
    // Select call channels
    cy.get("#omni_ie_call_channels_selected").click();
    cy.get("label[for='omni_ie_call_channels_checkbox_0-input'] span.mat-checkbox-inner-container").click().wait(2000);
    cy.get("#omni_ie_call_channels_search").type("WEB").wait(1000);
    cy.get(".mat-checkbox-inner-container").click().wait(1000);
    cy.get("#omni_ie_call_channels_selected").click({ force: true }).wait(1000);
  
    // Select call segments
    cy.get("#omni_ie_call_segments_selected").click().wait(2000);
    cy.get("#omni_ie_call_segments_selected").click({ force: true }).wait(2000);
  
    // Select call directions
    cy.get("#omni_ie_call_directions_selected").click().wait(2000);
    cy.get("#omni_ie_call_directions_search").type("INBOUND");
    cy.get(".mat-checkbox-inner-container").click().wait(2000);
  
    // Run the filter
    cy.get('#omni_ie_run_button').click({ force: true }).wait(3000);
  
    // Generate a unique filter name
    const uniqueFilterName = `Cypress_Automation_${Date.now()}`;
    
    // Save the filter
    cy.get("#omni_ie_save_button").click({ force: true }).wait(1000);
    cy.get("#omni_save_filter_input").type(uniqueFilterName).wait(2000);
    cy.get("#omni_save_filter_save_btn").click();
});
