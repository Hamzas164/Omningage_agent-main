Cypress.Commands.add("LoginPage2", (env = 'qa') => {
    // Define the URLs and credentials as variables
    const urls = {
        qa: "https://vmo2-qa.omningage.click/",
        prod: "https://vmo2-prod.omningage.click/",
    };

    const authUrls = {
        qa: "https://qa-1.awsapps.com/auth/**",
        prod: "https://prod-1.awsapps.com/auth/**",
    };

    const credentials = {
        username: "agent.a3",
        password: "A12dadf125",
    };

    // Set the viewport size
    cy.viewport(1450, 800);

    // Debugging step: Log the environment and URL to ensure they are correct
    cy.log(`Environment: ${env}`);
    cy.log(`URL: ${urls[env]}`);

    // Ensure the env variable is valid
    if (!urls[env]) {
        throw new Error(`Invalid environment: ${env}`);
    }

    // Visit the website with the specified URL based on the environment
    cy.visit(urls[env]);

    // Click on the login button
    cy.wait(3000);
    cy.get('#omni_dashboard_login_btn').click();

    // Intercept the network request based on the environment
    cy.intercept(authUrls[env]).as("popupUrl");

    // Handle uncaught exceptions to prevent test failure
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    // Wait for the intercepted network request
    cy.wait("@popupUrl", { timeout: 25000 }).then((interception) => {
        // Get the intercepted request object
        const request = interception.request;

        // Extract the domain from the request URL
        const url = new URL(request.url);
        const domain = url.origin;

        // Use `cy.origin` to handle cross-origin content and pass variables
        cy.origin(domain, { args: { request, credentials, urls, env } }, ({ request, credentials, urls, env }) => {
            // Visit the popup URL
            cy.visit(request.url, { qs: request.query });

            // Wait for the iframe to be fully loaded
            cy.wait(5000); // Adjust as necessary

            // Type into the username field
            cy.get("#wdc_username").type(credentials.username);

            // Type into the password field
            cy.get("#wdc_password").type(credentials.password);

            // Click the login button
            cy.get("#wdc_login_button").click();

            // Wait for the successful login URL
            cy.url().should("include", "awsapps.com/");

            // Wait for additional operations if necessary
            cy.wait(30000);
        });

        // After login, return back to the original website
        cy.visit(urls[env]);
        cy.wait(2000);
    });

    // Click again on the login button to ensure the popup is not triggered again
    cy.get('#omni_dashboard_login_btn').click();

    // Wait for redirection
    cy.url().should("include", urls[env]);
    cy.wait(20000);

    // Assert that widgets contain data
    cy.get('.cont-stats > .wrapper').should('not.be.empty');
    cy.get('.totalTime > h3').should('not.be.empty');
    cy.get('.inbound > .wrapper').should('not.be.empty');

    // Wait to ensure the page is fully loaded
    cy.wait(5000);

    // Make a request with cache control to ensure no caching issues
    cy.request({
        url: urls[env],
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache'
        }
    });
});
