const path = require("path");
const pkg = require("../package.json");

module.exports = ({ config }) => {
  // Allow relative path imports
  config.resolve.alias[pkg.name] = path.resolve('./src');
  config.resolve.alias['stories'] = path.resolve('./stories');
  return config;
};
