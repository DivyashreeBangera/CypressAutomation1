const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Define setupNodeEvents function
    setupNodeEvents(on, config) {
      // Add Mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
      // Return the modified config
      return config;
    },
    baseUrl: 'https://jsonplaceholder.typicode.com', 
    baseUrl2: 'https://the-internet.herokuapp.com',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory for reports
      overwrite: false, // Avoid overwriting previous reports
      html: true, // Enable HTML reports
      json: true, // Enable JSON reports
    },
  },
});
