const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  pageLoadTimeout:60000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: "cypress/fixtures/Omningage/*.js",
  },
});
