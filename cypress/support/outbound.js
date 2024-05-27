Cypress.Commands.add("Outbound", () => {
  const phoneNumber = "+442045586680"; // Dummy phone number
  const queueId = "3"; // Dummy queue ID

  cy.log("Outbound Call Initiation");
  cy.wait(5000);
  cy.get("#omni_dialpad_button").click();
  cy.contains(phoneNumber).click();
  cy.wait(6000);
  cy.get("#omni_phone_number_phone_dial").click();
  cy.wait(2000);
  cy.get("div[aria-label='dropdown trigger']").click().wait(2000);
  cy.get(`#omni_queues_id_${queueId}`).click();
  cy.wait(20000);
  //manually accept call from teams
  cy.get('.end-call-btn > .material-icons').click()
  //cy.get("button.mat-tooltip-trigger.end-call-btn").click();
  cy.wait(10000);

  cy.get("#omni_dialpad_button").click();
  cy.wait(3000);
  cy.get('#mat-tab-label-3-0').click();
  cy.wait(7000);
  cy.get("#omni_global_search_recent").type(phoneNumber);
  cy.contains(phoneNumber).click();
  cy.get("#omni_phone_number_phone_dial").click().wait(2000);
  cy.get("div[aria-label='dropdown trigger']").click().wait(2000);
  cy.get(`#omni_queues_id_${queueId}`).click();
  cy.wait(20000);
  cy.get("button.mat-tooltip-trigger.end-call-btn").click();
  cy.wait(7000);
  cy.get("#omni_dialpad_button").click();

  cy.get('#omni_add_to_favourites_4, #omni_remove_from_favourites_4').then($element => {
    if ($element.is('#omni_add_to_favourites_4')) {
      cy.get('#omni_add_to_favourites_4').click({ force: true });
    } else {
      cy.get('#omni_remove_from_favourites_4').click({ force: true });
    }
  });

  cy.get('#mat-tab-label-4-3').click().wait(3000);
  cy.get("#omni_delete_favourite_0").click({ force: true });
});
