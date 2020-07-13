const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports ={

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true}
                    }
                ]
            },
            {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: "file-loader"
                }
            ]

            }
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}