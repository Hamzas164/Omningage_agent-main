Cypress.Commands.add("inbound", () => {
    const selectors = {
        dropdownIcon: ".material-icons.dropDownIcon",
        statusDropdown: "#omni_status_dropdwon_1",
        phoneNumberElement: ".mat-tooltip-trigger.number.robotoMedium.ng-tns-c236-2",
        acceptCallButton: ".buttonText.robotoMedium.ng-tns-c236-2",
        muteButton: "#omni_simple_call_mute_call_btn",
        holdButton: "#omni_simple_call_hold_call_btn",
        descriptionButton: '#omni_dialpad_layout_description_btn > .material-icons',
        descriptionInput: "#mat-input-0",
        saveDescriptionButton: "#omni_dialpad_layout_save_btn",
        endCallButton: '.end-call-btn > .material-icons',
        forwardButton: "#omni_simple_call_phone_forwarded_btn",
        queueButton: "#omni_simple_call_queue_btn",
        reasonInput: "textarea[placeholder='Add Reason']",
        saveNotesButton: "#omni_transfer_notes_save_btn"
    };
    
    const phoneNumber = "+442045586680"; // Dummy phone number, replace as needed

    cy.get(selectors.dropdownIcon).click();
    cy.wait(3000);
    cy.get(selectors.statusDropdown).click();
    cy.wait(3000);

    cy.get(selectors.phoneNumberElement, { timeout: 30000 })
        .contains(phoneNumber)
        .then($element => {
            if ($element.length > 0) {
                cy.get(selectors.acceptCallButton).click();
            } else {
                cy.log('The specified number is not present');
            }
            cy.wait(3000);
            cy.get(selectors.holdButton).click();
            cy.wait(3000);
            cy.get(selectors.holdButton).click();
            cy.wait(3000);

            cy.get(selectors.muteButton).click();
            cy.wait(2000);
            cy.get(selectors.muteButton).click();
            cy.wait(2000);

            cy.get(selectors.descriptionButton).click();
            cy.wait(2000);
            cy.get(selectors.descriptionInput).type("Automated Call");
            cy.wait(2000);
            cy.get(selectors.saveDescriptionButton).click();

            cy.get(selectors.forwardButton).click();
            cy.wait(5000);
            cy.get(selectors.queueButton).click();
            cy.wait(4000);
            cy.contains("Billing and Payments12345").click();
            cy.wait(2000);

            cy.get(selectors.reasonInput).type("Transfer call");
            cy.wait(2000);
            cy.get(selectors.saveNotesButton).click();
            cy.wait(8000);

            cy.get(selectors.dropdownIcon).click();
            cy.wait(3000);
            cy.get(selectors.statusDropdown).click();
            cy.wait(3000);

            cy.get(selectors.phoneNumberElement, { timeout: 30000 })
                .contains(phoneNumber)
                .then($element => {
                    if ($element.length > 0) {
                        cy.get(selectors.acceptCallButton).click();
                    } else {
                        cy.log('The specified number is not present');
                    }
                    cy.wait(5000);

                    cy.get('#omni_simple_call_people_btn > .mat-button-wrapper > .conference-icon-c > .material-icons').click();
                    cy.wait(3000);
                    cy.get('#omni_simple_call_queue_btn > span').click();
                    cy.wait(2000);
                    cy.contains("Billing and Payments12345").click();
                    cy.wait(3000);

                    cy.get('#omni_conference_call_handler_btn > .mat-button-wrapper > .conference-icon-c > .material-icons').click();
                    cy.wait(2000);

                    cy.get('.callButonimg > img').click();
                    cy.wait(3000);
                    cy.get('#omni_conference_searchbox_call_end_btn').click();
                    cy.wait(4000);

                    cy.get('#omni_simple_call_support_agent_btn > .mat-button-wrapper > .conference-icon-c > .material-icons').click();
                    cy.wait(3000);
                    cy.get(':nth-child(2) > #omni_simple_call_consult_queue_btn > span').click();
                    cy.wait(2000);
                    cy.contains("Billing and Payments12345").click();
                    cy.wait(3000);
                    cy.get("#omni_consult_swap_btn").click();
                    cy.wait(2000);
                    cy.get("#omni_consult_swap_btn").click();
                    cy.wait(2000);
                    cy.get("#Icon_ionic-md-people").click({force:true});
                    cy.wait(4000);
                    cy.get(selectors.endCallButton).click();
                    cy.wait(4000);

                    cy.get(':nth-child(1) > .dropdownBtn > #omni_call_tags_active_dropdown_btn > :nth-child(2)').click();
                    cy.wait(2000);
                    cy.contains("VMO2").click();
                    cy.wait(2000);
                    cy.get(':nth-child(2) > .dropdownBtn > #omni_call_tags_active_dropdown_btn > .openCloseIcon > .material-icons').click();
                    cy.wait(2000);
                    cy.contains("VMO").click();
                    cy.wait(2000);
                    cy.get(':nth-child(3) > .dropdownBtn > #omni_call_tags_active_dropdown_btn > .openCloseIcon > .material-icons').click();
                    cy.wait(2000);
                    cy.contains("vmo2").click();
                    cy.wait(2000);
                });
        });
});
