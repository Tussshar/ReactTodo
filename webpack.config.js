var webpack = require('webpack');
var path = require('path');

/*
  Currently our bundle file is gigantic i.e. 5.8 MB
  A website shouldn't be this big
  We have few things that we dont need in production
  we can solve this using env variable
*/

//for production env NODE_ENV would have some value, but nothing for development env
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false//this would disable warnings in your file
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,// __dirname gives path to whatever file we are in
    modulesDirectories: [
      /*
        If we define modulesDirectories, then we dont have to define alias
        for components we create
      */
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      app: 'app',
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
  //allows us to create sourcemap
  //we dont need sourcemap in production
  /*
    To run without sourcemap in dev env:
    In terminal run the following command:
    NODE_ENV=production webpack
    notice the size of bundle file

    we can also run it using p flag
    NODE_ENV=production webpack -p
    it takes a bit longer to run but does ton of optimization
  */
};
