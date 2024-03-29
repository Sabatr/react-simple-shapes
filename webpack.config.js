const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname,'./src/App.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV' : JSON.stringify('production')
            }
        })
    ]
};