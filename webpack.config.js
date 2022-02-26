const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require("glob");

const entries = WebpackWatchedGlobEntries.getEntries([path.resolve(__dirname, './src/js/**/*.js')], {
    ignore: path.resolve(__dirname, './src/js/**/_*.js'),
})();

// const entries = glob.sync("./src/**/*.js", {
//     ignore: './src/**/_*.js'
// })


const htmlGlobPlugins = (entries, srcPath) => {
    return Object.keys(entries).map((key) =>
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: `${key}.html`,
            template: `${srcPath}/${key}.html`,
            chunks: [key],
        })
    );
};

module.exports = {
    mode: "development",
    entry: './src',
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "build"),
        //filename: "./js/bundle.js",
        filename: "./js/[name].bundle.js",
    },
    resolve: {
        modules: [path.resolve(__dirname, "node_modules")],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                ],
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
            {
                test: [/\.js$/, /\.jsx$/, /\.jsx$/],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
        //new CleanWebpackPlugin(),
        ...htmlGlobPlugins(entries, './src')

    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "./build"),
        }
    }
};