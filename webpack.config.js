const path                    = require('path');
const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin              = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home: ['./src/index.ts'],
        alumnos: ['./src/alumnos.ts'],
        maestros: ['./src/maestros.ts'],
    },
          
    output: {
        filename: '[name].js',        
        path: path.resolve(__dirname, 'dist'),        
        clean: true,
    },
   
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
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //     // Creates `style` nodes from JS strings
            //     "style-loader",
            //     // Translates CSS into CommonJS
            //     "css-loader",
            //     // Compiles Sass to CSS
            //     "sass-loader",
            //     ],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
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
    // plugins: [
    //     new MiniCssExtractPlugin({
    //       filename: '[name].css',
    //     }),
    // ],
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            // inject : "body",
            hash: false,  
            filename: './index.html',
            chunks: ['home'], 
        }),
        new HtmlWebPackPlugin({
            template: './src/alumnos.html',            
            // inject : "body",
            hash: false,            
            filename: 'alumnos.html',
            chunks: ['alumnos'], 
            // filename: './alumnos.html'
        }),
        new HtmlWebPackPlugin({
            template: './src/maestros.html',
            // inject : "body",
            hash: false,    
            filename: './maestros.html',
            chunks: ['maestros'], 
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
            //   { from: 'src/jquery.min.js', to: 'jquery.min.js' },
              { from: 'src/assets', to: 'assets/images' },
              //{ from: 'icons', to: '../' },
            ],
          }),
        // new CopyPlugin([
        //     { from: 'src/favicon.ico', to: './favicon.ico' },
        // ]),
    ],
    devServer: {
        static: './dist',    
    },
    // devServer: {
    //     static: {
    //       directory: path.join(__dirname, 'public'),
    //     },
    //     //compress: true,
    //     port: 8080,
    // },

}




