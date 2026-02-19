import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  devtool:
    process.env.NODE_ENV === "development" ? "eval-source-map" : "source-map",
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
