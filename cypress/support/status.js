Cypress.Commands.add("Status", () => {
    // Wait for the status element to be visible
    cy.get('.stateValue', { timeout: 10000 }).should('be.visible').then(($statusElement) => {
        const statusText = $statusElement.text().trim();
        cy.log('Current status:', statusText);
        cy.log(typeof(statusText));

        // Depending on the status, perform different actions
        if (statusText === "Offline") {
            // Change status to "Available"
            cy.get("#status").click().wait(2000);
            cy.get('#omni_status_dropdwon_2 > .mat-tooltip-trigger').click().wait(2000)
           
    // cy.get('.mat-button-wrapper').click().wait(2000)
    // cy.get('#omni_logout_agent_logout_btn').click().wait(4000)

        } else if (statusText === 'Not Ready - Lunch') {
            // Change status to "Not ready"
            cy.get("#status").click();
            cy.get('#omni_status_dropdwon_1 > .mat-tooltip-trigger').click().wait(2000)
            cy.get("#status").click();
            cy.get('#omni_status_dropdwon_2 > .mat-tooltip-trigger').click().wait(2000)
        } else if (statusText === 'Social State' || statusText === 'NR.  Meeting' ||
                   statusText === 'NR. Calling' || statusText === 'Not-Ready lunch break for QA' ||
                   statusText === 'NR. Short Break' || statusText === 'NR. Tea Break' ||
                   statusText === 'Busy' || statusText === 'CONNECTING') {
            // Handle various statuses with similar actions
            cy.get("#status").click();
            cy.get('#omni_status_dropdwon_2 > .mat-tooltip-trigger').click().wait(2000);
            cy.get("#status").click();
            cy.get('#omni_status_dropdwon_2 > .mat-tooltip-trigger').click().wait(2000);
        } else {
            // Unexpected status
            cy.log('Unexpected status:', statusText);
        }
    });
});
