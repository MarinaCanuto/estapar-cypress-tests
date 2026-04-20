const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://magento2-demo.magebit.com",

    screenshotOnRunFailure: true,
    video: true,

    setupNodeEvents(on, config) {}
  },
});