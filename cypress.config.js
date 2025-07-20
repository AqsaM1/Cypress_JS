const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.guru99.com/test/newtours/login.php",
    viewportHeight: 720,
    viewportWidth: 1280,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    env: {
      apiUrl: "",
      authToken: "",
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 600000,
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
    videosFolder: "cypress/video",
    video: true,
    specPattern: "cypress/e2e/**/*.cy.js",
    reporter: "mochawesome",
    reporterOptions: {
      reporterDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: false,
    },

    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
