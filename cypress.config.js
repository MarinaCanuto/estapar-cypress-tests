const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento2-demo.magebit.com',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});