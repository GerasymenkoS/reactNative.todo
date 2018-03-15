const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const config = {
    devtool: 'source-map',
    entry: {
        app: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules\/(?!(react-select)\/).*/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                keep_fnames: true
            },
            mangle: {
                keep_fnames: true
            }
        }
        ),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = merge(common, config);
