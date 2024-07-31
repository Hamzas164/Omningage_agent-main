
describe("Login",()=>{
    
    it('User must change the status of the agent side to "Available" from any status that the agent currently has', () => {
        cy.LoginPage2();
        cy.wait(5000);
        cy.Status();
    });
  
})
