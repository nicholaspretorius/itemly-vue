import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import path from 'path';

export default {
    mode: 'development',
    context: path.resolve(__dirname),
    entry: {
        app: './src'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
           vue: 'vue/dist/vue.min.js' 
        },
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [path.join(__dirname, '..', './src')]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        inline: true
    }
}