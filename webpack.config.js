const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',

    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 3002,
        contentBase: path.resolve(__dirname, 'dist'),
        watchOptions: {
            poll: true
        },
        watchContentBase: true
      },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    stats: {
        children: true,
      }
}