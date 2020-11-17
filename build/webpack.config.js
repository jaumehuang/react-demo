const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('./utils')
console.log(resolve)
module.exports = {
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {

                        }
                    }
                ]
            },{
                test: /\.scss$/,
                //只针对scr下面的.scss文件进行编译
                include: [path.join(__dirname,'./../','src' )],
                use: [
                    'style-loader',
                   'css-loader',
                    // {
                    //     loader: 'typings-for-css-modules-loader',
                    //     options: {
                    //        //是否有使用css modules
                    //        modules:true,
                    //        //类名导出
                    //        namedExport: true,
                    //        //支持驼峰
                    //        camelCase:true,
                    //        //是否使用sass
                    //        sass: true ,
                    //        localIdentName: '[name]__[local]__[hash:base64:5]'
                    //     }
                    // },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'build/tpl/index.html'
        })
    ],
    performance:{
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
        // 提供资源文件名的断言函数
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        
        }    
    },
    resolve: {
        extensions: ['.js','.jsx','.tsx','.scss','.css'],
        alias:{
            '@components':path.join(__filename,'./../','src/components')
        }
    }
}

