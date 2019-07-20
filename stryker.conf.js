module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    coverageAnalysis: "all",
    mochaOptions: {
      spec: ['test/**/*.js'],
    },
    maxConcurrentTestRunners: 2
  });
};
