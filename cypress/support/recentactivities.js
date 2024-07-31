// cypress/support/commands.js

// Extracted selectors for easier management
const locators = {
  recentActivities: "Recent Activities",
  editNoteButton: "#omni_edit_note_buttons_1",
  noteTextarea: "textarea[type='text']",
  dropdownButton: "#omni_drop_down_buttons_1",
  searchTextButtons: "#omni_search_text_buttons_1",
  searchCheckbox: '#omni_checkbox_1 > .mat-checkbox-layout > .mat-checkbox-inner-container',
  searchInputField: "#omni_search_text_inputfield_1",
  wrapupCheckbox: "#omni_checkbox_0-input",
  saveButton: "#omni_save_button_1",
  addTagButton: "#omni_add_tag_button_1",
  updateTagInput: "#omni_update_tag_1-input",
  searchTextTag: "#omni_search_text_tag_1",
  firstTagCheckbox: "#omni_update_tag_0-input",
  removeWrapupTagsButton: '#omni_remove_wraupup_tags_buttons_1',
  removeTagButton: '#omni_on_remove_tag_1',
  chatHistoryClearButton: "#omni_chat_history_clear_btn",
  dropdownButtonPrefix: "#omni_drop_down_buttons",
  chatTransferButtonPrefix: "#omni_chat_transfer_buttons",
};

// Custom command for recent activities
Cypress.Commands.add("recent", () => {
  cy.contains(locators.recentActivities).click({ force: true }).then(() => {
    cy.wait(5000);

    cy.get(locators.editNoteButton).click({ force: true });
    cy.wait(5000);

    cy.get(locators.noteTextarea).clear().type("Notes get updated");
    cy.contains("Update").click();
    cy.wait(4000);

    handleDropdownActions();
    addTag("testing");
    removeTags();

    clickChatTransferButton(0);
  });
});

// Handle dropdown actions
function handleDropdownActions() {
  cy.get(locators.dropdownButton).click({ force: true }).wait(2000);
  cy.get(locators.searchTextButtons).click().wait(2000);
  cy.get(locators.searchCheckbox).click().wait(2000);
  cy.get(locators.searchInputField).type("Wrapups");
  cy.wait(2000);
  cy.get(locators.wrapupCheckbox).click({ force: true });
  cy.wait(2000);
  cy.get(locators.saveButton).click({ force: true });
  cy.wait(3000);
}

// Add a tag to an interaction
function addTag(tagName) {
  cy.get(locators.addTagButton).click({ force: true }).wait(1000);
  cy.get(locators.updateTagInput).click({ force: true });
  cy.wait(1500);
  cy.get(locators.searchTextTag).type(tagName);
  cy.wait(1500);
  cy.get(locators.firstTagCheckbox).click({ force: true });
  cy.get(locators.saveButton).click({ force: true });
  cy.wait(2000);
}

// Remove all tags from the first interaction
function removeTags() {
  cy.get(locators.dropdownButton).click({ force: true }).wait(5000);
  cy.get(locators.dropdownButton).click({ force: true }).wait(2000);
  cy.get(locators.removeWrapupTagsButton).click().wait(2000);
  cy.get(locators.removeWrapupTagsButton).click().wait(2000);
  cy.get(locators.removeTagButton).click().wait(2000);
  cy.get(locators.removeTagButton).click().wait(2000);
  cy.get(locators.saveButton).click({ force: true });
}

// Recursively click chat transfer buttons
function clickChatTransferButton(interactionIndex) {
    if (interactionIndex > 40) return;

    const interactionLocator = `${locators.dropdownButtonPrefix}_${interactionIndex}`;
    cy.get(interactionLocator).click({ force: true }).then(() => {
        const chatTransferLocator = `${locators.chatTransferButtonPrefix}_${interactionIndex}`;
        cy.get('body').then($body => {
            if ($body.find(chatTransferLocator).length > 0) {
                cy.get(chatTransferLocator).click({ force: true }).wait(4000);
                cy.wait(3000); // Apply wait as needed
                cy.get(locators.chatHistoryClearButton).click().wait(4000);
            }
        }).then(() => {
            // Continue to the next interaction if more than one needs processing
            if (interactionIndex < 40) {
                clickChatTransferButton(interactionIndex + 1);
            }
        });
    });
}
