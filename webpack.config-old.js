const path                    = require('path');
const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin              = require('copy-webpack-plugin');

const pages = ["index", "alumnos", "maestros"];

module.exports = {
    // entry: {
    //     index: './src/index.ts',
    //     alumnos: './src/alumnos.ts',
    //     maestros: './src/maestros.ts',
    // },
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.ts`;
        return config;
      }, {}),
      output: {
        filename: "[name].ts",
        path: path.resolve(__dirname, "dist"),
      },

    mode: 'development',
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
    // plugins: [].concat(
    //     pages.map(
    //       (page) =>
    //         new HtmlWebPackPlugin({                
    //           inject: true,
    //           template: `./src/${page}.html`,
    //           filename: `./${page}.html`,
    //           chunks: [page],
    //         })
    //     )
    //   ),
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
            filename: './maestros.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin([
            { from: 'src/favicon.ico', to: './favicon.ico' },
        ]),
    ]

}

