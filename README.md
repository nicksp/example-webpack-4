# example-webpack-4

Just an example showing new awesome stuff [Webpack 4](https://github.com/webpack/webpack/releases/tag/v4.0.0) brang to the table.

## Major Changes

1. Zero configuration: webpack 4 doesn’t need a configuration file anymore.
  It will look in `./src/index.js` as the default entry point. Moreover, it will expose the bundle in `./dist/main.js` as the default output file.

1. production and development modes.
  **Production mode** enables all sorts of optimizations out of the box: minification, scope hoisting, tree-shaking and more.

  **Development mode** is optimized for speed and does nothing more than providing an un-minified bundle.

1. Transpiling ECMAScript 2015 with Babel.
  This isn't a feature per se, but just wanted to mention that loaders configuration still has to be done using `webpack.config.js` file.


## Getting Started

- `yarn`
- `yarn start` // ro run dev server
- `yarn build` // to build once
- open `http://localhost:2017`
