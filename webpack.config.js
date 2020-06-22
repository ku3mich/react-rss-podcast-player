const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = (env) => {
    console.log(`env: `, env);
    return {
        entry: "./test-app/test-app.js",
        output: {
            path: path.resolve(__dirname, "test-app/build"),
            filename: "test-app.js",
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.css$/,
                    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: "RssPodcastPlayer",
                template: "./test-app/index.html",
                base: env && env.prod ? "" : "http://localhost:8080",
            }),
        ],
    };
};
