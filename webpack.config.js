const babelOptions = {
  "presets": ["es2015","react", "stage-0"]
};
const autoprefixer = require("autoprefixer");
const configImport = require( "../config/config.json");
const config = configImport[configImport.currentEnv];

module.exports = {
  entry: "./src/index",
  output: {
    filename: "./dist/bundle.js",
    path: __dirname
  },
  module: {
    rules: [
      //   {
      //     test: /\.ts(x?)$/,
      //     exclude: /node_modules/,
      //     use: [
      //       {
      //         loader: 'babel-loader',
      //         options: babelOptions
      //       },
      //
      //       // {
      //       //   loader: "eslint-loader",
      //       //   options: {
      //       //     // eslint options (if necessary)
      //       //   }
      //       // },
      //       {
      //         loader: 'ts-loader'
      //       }
      //       ,
      //       {
      //         loader: 'tslint-loader',
      //         options: tsLintConfig
      //
      //       }
      //     ]
      // },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions
          }
          ,
          {
            loader: "eslint-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [autoprefixer("last 5 versions")];
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [autoprefixer("last 5 versions")];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
        // loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js", "json"]
  },
  devServer: {
    host: config.RRHost,
    port: config.RRPort,
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true
    }
  }
};