const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );
  return config;
}

module.exports = defineConfig({
  projectId: "2yfsg3",
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 25000,
  video: false,
  reports: false,
  screenshots: false,
  downloads: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    retries: {
      runMode: 1,
    },
    experimentalStudio: true,
    supportFile: "cypress/support/e2e.js",
    specPattern: "**/*.feature",
    stepDefinitions: "cypress/support/step_definitions/*.js",
    setupNodeEvents,
    baseUrl: 'https://magento2-demo.magebit.com'
  },
})
