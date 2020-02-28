const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: 'cyb-ui',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
    },
    module: {
        noParse: /\.stories.jsx$/,
        rules: [
/*            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', options:
                            {
/!*
                                modules: true,
*!/
                                localIdentName: '[name]_[local]',
                            }
                    },
                ]
            },*/
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            outputPath: '',
                            publicPath: '',
                            useRelativePath: false,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: path.resolve(__dirname, 'src/components/Application/Hello/img'),
                use: [
                    {
                        loader: 'url-loader',
/*                        options: {
                            limit: 8192
                        }*/
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })]
};
