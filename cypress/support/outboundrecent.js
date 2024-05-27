Cypress.Commands.add("Outbound_recent", () => {

    cy.get("#omni_dialpad_button").click();
    cy.wait(4000)
    //cy.contains("Recent").click({force:true})
    cy.get('#mat-tab-label-1-0 > .mat-tab-label-content > span.ng-star-inserted').click()
  //  cy.get('#mat-tab-label-2-0 > .mat-tab-label-content').click()
    cy.wait(7000)
    cy.get("#omni_global_search_recent").type("+442045")
    cy.contains("+442045586680").click()
    cy.get("#omni_phone_number_phone_dial").click();
    cy.get("div[aria-label='dropdown trigger']").click();
    cy.get("#omni_queues_id_3").click()
    cy.wait(10000)
    cy.get("button.mat-tooltip-trigger.end-call-btn").click()

    
})