const path = require("path");

module.exports = ({ config }) => {
  // Relative path imports
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./src'),
  ];
  config.resolve.alias['testing'] = path.resolve('testing');
  return config;
};
