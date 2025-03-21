const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

webpack_shell_Config = withModuleFederationPlugin({

  name: 'shell',

  exposes: {
    "remote": 'http://localhost:4201/remoteEntry.js',
    "mfe2": 'http://localhost:4202/remoteEntry.js'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },


});
module.exports={...webpack_shell_Config,
  output:{
    uniqueName: "MyProj",
    publicPath: "auto",
    scriptType: 'text/javascript'
  }
}