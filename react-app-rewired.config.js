const path = require('path');

/**
 * React App Rewired Config
 */
module.exports = {
  // Update webpack config to use custom loader for WASM files
  webpack: (config) => {
    // Make file-loader ignore WASM files
    // const wasmExtensionRegExp = /\.wasm$/;
    // config.resolve.extensions.push('.wasm');
    // config.module.rules.forEach((rule) => {
    //   (rule.oneOf || []).forEach((oneOf) => {
    //     if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
    //       oneOf.exclude.push(wasmExtensionRegExp);
    //     }
    //   });
    // });

    // // Add dedicated loader for WASM files
    // config.module.rules.push({
    //   test: wasmExtensionRegExp,
    //   include: path.resolve(__dirname, 'src'),
    //   use: [
    //     {
    //       loader: require.resolve('wasm-loader'),
    //       options: {},
    //     },
    //   ],
    // });

    // config.module.defaultRules = [
    //   {
    //     type: 'javascript/auto',
    //     resolve: {},
    //   },
    //   {
    //     test: /\.json$/i,
    //     type: 'json',
    //   },
    // ];

    // // Note: It's important that the "worker-loader" gets defined BEFORE the TypeScript loader!
    // config.module.rules.unshift({
    //   test: /\.worker\.ts$/,
    //   use: {
    //     loader: 'worker-loader',
    //     options: {
    //       // Use directory structure & typical names of chunks produces by "react-scripts"
    //       name: 'static/js/[id].worker.[contenthash:8].js',
    //     },
    //   },
    // });

    return config;
  },
};
