// Your test file

describe("Login", () => {
    it('Verify the outbound call behavior', () => {
        cy.LoginPage();
        cy.wait(5000);
        cy.Outbound();
    });
});
