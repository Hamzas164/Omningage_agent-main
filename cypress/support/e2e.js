// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import  './Login'
import './status'
import './Search_&_Favorites'
import './outbound'
import './outboundrecent'
import './recentactivities'
import './Interaction'
import './login2'
import './interaction2'
import './monitoring'
import './inboundcall'
import './locators'
beforeEach(() => {
    // Clear cookies
    cy.clearCookies()
  
    // Clear local storage
    cy.window().then((win) => {
      win.localStorage.clear()
    })
  
    // Clear session storage
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
  })
// Alternatively you can use CommonJS syntax:
// require('./commands')