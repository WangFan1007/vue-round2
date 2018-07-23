const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename:"bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            { test:/\.css$/,use:['style-loader','css-loader'] },
            { test:/\.scss$/,use:['style-loader','css-loader',"sass-loader"]},
            { test:/\.vue$/,use:'vue-loader' },
            { test:/\.js$/,use:'babel-loader', exclude:/node_modules/ },
            { test:/\.(png|jpg|gif|jpeg)$/,loader:'url-loader?limit=2048'},
            { test:/\.(woff|svg|eot|ttf|woff|woff2)$/,loader:'url-loader'},
            
        ]
    }
    
}


