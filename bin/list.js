
var soljsonSources = [
  "soljson-v0.8.6+commit.d0f402ce.js",
  "soljson-v0.7.6+commit.c726b9c0.js",
  "soljson-v0.6.12+commit.8d65dee4.js",
  "soljson-v0.5.17+commit.66b1543b.js",
  "soljson-v0.4.26+commit.5eff4511.js"
];
var soljsonReleases = {
  "0.8.6": "soljson-v0.8.6+commit.d0f402ce.js",
  "0.7.6": "soljson-v0.7.6+commit.c726b9c0.js",
  "0.6.12": "soljson-v0.6.12+commit.8d65dee4.js",
  "0.5.17": "soljson-v0.5.17+commit.66b1543b.js",
  "0.4.26": "soljson-v0.4.26+commit.5eff4511.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
