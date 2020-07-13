const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')


module.exports ={

    // entry:{
    //     app: "./src/index.js",

    // },
    // output: {
    //     path: path.resolve(__dirname, "dist"),
    //     filename: "main.js"
    // },

    // node: "development"


    // entry: "src/js/index.js", 
    // output:{
    //     path: path.resolve(__dirname, 'dist/js'),
    //     filename: 'bundle.js'

    // },
    // node: 'development'



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