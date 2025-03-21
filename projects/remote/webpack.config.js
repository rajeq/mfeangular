const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const webpackConfig = require('../shell/webpack.config');
module.exports = withModuleFederationPlugin({

  name: 'remote',

  exposes: {
    './MfeComponent': './src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

