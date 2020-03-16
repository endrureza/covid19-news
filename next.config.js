const path = require('path');

const env = process.env.ENV;

let configFile;

if (env == 'prod') {
  configFile = require('./config/prod.json');
} else {
  configFile = require('./config/local.json');
}

module.exports = {
  // Set environment to get config variable
  env: configFile,
  // Static Optimization Indicator
  devIndicators: {
    autoPrerender: true,
  },
  // Disable powered by
  poweredByHeader: false,
};
