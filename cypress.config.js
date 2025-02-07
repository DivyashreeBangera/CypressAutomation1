const { defineConfig } = require("cypress");
const mysql = require('mysql2');
const fs = require('fs-extra');
const path = require('path');
const xlsx = require('xlsx');

module.exports = defineConfig({
  e2e: {
    // Set your primary baseUrl for tests
    baseUrl: 'https://jsonplaceholder.typicode.com', 
    screenshotOnRunFailure: true,
    video: true,
    
    // (Optional) If you need another URL, store it as a custom config property.
    env: {
      baseUrl2: 'https://the-internet.herokuapp.com'
    },
    
    setupNodeEvents(on, config) {
      // Create a MySQL connection
      const connection = mysql.createConnection({
        host: 'localhost', // Update as needed
        user: 'root',      // Database username
        password: 'Divya@123', // Database password
        database: 'testdb',    // Database name
      });

      // Define tasks
      on('task', {
        queryDatabase(query) {
          return new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
              if (error) return reject(error);
              resolve(results);
            });
          });
        },

        readExcel({ filePath, sheetName }) {
          const absolutePath = path.resolve(filePath);
          const workbook = xlsx.readFile(absolutePath);
          const sheet = workbook.Sheets[sheetName];
          return xlsx.utils.sheet_to_json(sheet); // Converts sheet data to JSON
        }
      });

      // Add Mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
    
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory for reports
      overwrite: false,             // Avoid overwriting previous reports
      html: true,                   // Enable HTML reports
      json: true,                   // Enable JSON reports
    },
  },
});
