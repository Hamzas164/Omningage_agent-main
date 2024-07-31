describe("Login", () => {
    it('Verify the interaction explorer', () => {
        cy.LoginPage2();
        cy.wait(5000);
        cy.monitoring();
    });
});
