const path                    = require('path');
const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin              = require('copy-webpack-plugin');

const pages = ["index", "alumnos", "maestros"];

// home: ['./src/index.ts', './src/style.scss'],
module.exports = {
    mode: 'development',
    entry: {
        home: ['./src/index.ts'],
        alumnos: ['./src/alumnos.ts'],
        maestros: ['./src/maestros.ts'],
    },
    // output: {
    //     path: __dirname + 'dist',
    //     filename: '[name].bundle.js',
    // },      
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // output: {
    //     filename: 'main.js',
    //     path: path.resolve(__dirname, 'dist'),
    // },  
    // output: {
    //     filename: '[name].js',
    // }, 
    resolve: {
        extensions: ['.ts','.js','.json']
    },
    optimization: {
        minimizer: [ new OptimizeCssAssetsPlugin() ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
    ],
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new HtmlWebPackPlugin({
            template: './src/alumnos.html',            
            hash: true,            
            filename: 'alumnos.html'
            // filename: './alumnos.html'
        }),
        new HtmlWebPackPlugin({
            template: './src/maestros.html',
            hash: false,    
            filename: './maestros.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        // new CopyPlugin([
        //     { from: 'src/favicon.ico', to: './favicon.ico' },
        // ]),
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },

}

