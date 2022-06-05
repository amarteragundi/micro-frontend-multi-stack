const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: '/marketing/latest/',
  },
  plugins: [
    new ModuleFederation({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

// exporting merge
module.exports = merge(commonConfig, prodConfig);
