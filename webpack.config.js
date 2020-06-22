var path = require("path");
module.exports = {
    entry: "./src/Player.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
        //libraryTarget: "commonjs2",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                exclude: /(bower_components|build)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }],
            },
        ],
    },
    // externals: {
    //     react: "commonjs react",
    // },
};
