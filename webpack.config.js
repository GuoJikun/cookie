module.exports = {
  mode: "production",
  entry: "./cookie.ts",
  output: {
    filename: "cookie.js",
    path: __dirname,
    library: "cookie",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
};
