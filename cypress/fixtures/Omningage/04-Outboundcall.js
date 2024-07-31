// Your test file

describe("Login", () => {
    it('Verify the outbound call behavior', () => {
        cy.LoginPage2();
        cy.wait(5000);
        cy.Outbound();
    });
});
