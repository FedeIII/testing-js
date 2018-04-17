var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './dist/bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/]
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin('dist/main.css')
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, 'src/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            components: path.resolve(__dirname, 'src/components/'),
            reducers: path.resolve(__dirname, 'src/reducers/'),
            services: path.resolve(__dirname, 'src/services/'),
            domain: path.resolve(__dirname, 'src/domain/'),
            utils: path.resolve(__dirname, 'src/utils/'),
            styles: path.resolve(__dirname, 'src/styles/')
        }
    }
};
