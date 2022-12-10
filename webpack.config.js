const path = require('path');
const nodeExternals = require('webpack-node-externals')

const clientConfig = {
    entry:'./src/app.js',
    output:{
       filename:'bundle.js',
       path:path.join(__dirname,'public')
    },
    mode:'development',
    module:{
        rules:[{
          loader:'babel-loader',
          test:/\.js$/,
          exclude:/node_modules/
        }]
    },
    devServer:{
        static: path.join(__dirname,'public')
    }
}


const serverConfig = {
    entry:'./server/index.js',
    output:{
        filename:'index.js',
        path: path.join(__dirname,'dist')
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        }]
    },
    target:'node',
    mode:'development',
    externals:[nodeExternals()],
    node:{
        __dirname:false
    }
}

module.exports = [clientConfig,serverConfig];