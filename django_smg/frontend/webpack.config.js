const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
        resolve: {
          extensions: [".ts", ".tsx"],
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
    ],
  },
  entry: "./src/index.tsx",
  output: {
    filename: "main_v2.1.1.js",
    path: path.resolve(__dirname, "static", "frontend", "webpack_output"),
  },
};
