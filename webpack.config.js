
const path = require("path");
const webpack = require('webpack');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtraPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const config = require("./config");
console.log('process.env.NODE_ENV webpack dev start...', process.env.NODE_ENV);

const isDev = process.env.NODE_ENV === "development";

module.exports = {
    entry: {
        index: isDev ? [
            // hmr
            'webpack-dev-server/client?http://localhost:8089/',
            'webpack/hot/dev-server',
            path.join(__dirname, './src/index.ts')
        ] : [path.join(__dirname, './src/index.ts')],
        // other: path.join(__dirname, './src/index.ts')
    },
    // entry: "/src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].vuerootbundle.js",
        publicPath: "/",
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: "vue-loader"
        }, {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, './tsconfig.json'),
                        appendTsSuffixTo: [/\.vue$/],
                        /* 只做语言转换，而不做类型检查, 这里如果不设置成TRUE，就会HMR 报错 */
                        transpileOnly: true,
                    }
                }
            ]
        }, {
            test: /\.css$/i,
            use: [MiniCssExtraPlugin.loader, "css-loader", {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [
                            ['autoprefixer']
                        ]
                    }
                }
            }]
        }, {
            test: /\.less$/i,
            use: [MiniCssExtraPlugin.loader, "css-loader", {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [
                            ['autoprefixer']
                        ]
                    }
                }
            }, {
                loader: "less-loader",
                options: {
                    sourceMap: true
                }
            }]
        }, {
            test: /\.(png|jpe?g|gif|webp)$/i,
            type: "asset/resource",
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024 * 1024
                }
            },
            generator: {
                filename: 'static/[hash][name].[ext]'
            }
        },
        {
            test: /\.mp3/i,
            type: "asset/resource",
            generator: {
                filename: 'static/[hash][name].[ext]'
            }
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
            type: 'asset/inline',
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",// 对js做兼容处理
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    "chrome": "87",
                                    "ie": "9",
                                    "firefox": "60",
                                    "safari": '10',
                                    "edge": '17'
                                },
                                "corejs": "3",// 处理Promise，Proxy新类
                                "useBuiltIns": "usage" // 按需加载
                            }
                        ]
                    ]
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            title: "chatLearn",
            inject: true
        }),
        new MiniCssExtraPlugin({
            filename: "laoliu-[name].[hash:8].css"
        }),
        new VueLoaderPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: [".ts", ".js", ".vue", ".tsx", '.jsx'],// 省去后缀简化书写
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    devtool: isDev ? "cheap-module-source-map" : "source-map",
    // devtool: 'cheap-module-source-map',
    devServer: {
        host: config.dev.host,
        contentBase: './jjccdist',
        inline: true,
        port: config.dev.port,
        stats: "errors-only",
        hot: true,// hmr
        historyApiFallback: {
            // history路由404问题，仅本地，最好部署nginx
            rewrites: [
                { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
            ]
        },
        watchOptions: {
            poll: config.dev.poll,
        }
    },
    target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',// hmr
    mode: process.env.NODE_ENV
}