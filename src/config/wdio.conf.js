exports.config = {
  runner: "local",
  specs: ["../features/**/*.feature"],
  maxInstances: 3,
  capabilities: [
    {
      browserName: "chrome",
    },
    {
      browserName: "firefox",
    },
    {
      browserName: "MicrosoftEdge",
    },
  ],

  logLevel: "error",
  bail: 0,
  baseUrl: "https://www.saucedemo.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "cucumber",
  reporters: ["spec"],
  cucumberOpts: {
    require: ["./src/stepdefinitions/**/*.steps.js"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
