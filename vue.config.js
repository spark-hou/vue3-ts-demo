const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");


const options = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"), //antd包位置
  stylesDir: path.join(__dirname, "./src/styles/theme"), //主题文件所在文件夹
  varFile: path.join(__dirname, "./src/styles/theme/variables.less"), // 自定义默认的主题色
  // mainLessFile: path.join(__dirname, "./src/styles/theme/index.less"), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
  outputFilePath: path.join(__dirname, "./public/color.less"), //提取的less文件输出到什么地方
  themeVariables: ["@primary-color"], //要改变的主题变量
  indexFileName: "./public/index.html", // index.html所在位置
  generateOnce: false // 是否只生成一次（if you don't want to generate color.less on each chnage in code to make build process fast in development mode, assign it true value. But if you have new changes in your styles, you need to re-run your build process npm start.）
};

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/global.less'),
      ],
    })
}

module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  filenameHashing: true, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  chainWebpack: config => {
    // 开启图片压缩
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10240    // 图片小于10k转为base64,默认4k
      })
      .end()
    // .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    // .use('image-webpack-loader')
    // .loader('image-webpack-loader')
    // .options({bypassOnDebug: true})
    // .end()
    // 开启js、css压缩
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compressionPlugin')
        .use(new CompressionPlugin({
          test: /\.js$|\.html$|\.css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        }))
    }
    //配置全局less变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    //antd动态样式
    config.plugin('themePlugin')
      .use(new AntDesignThemePlugin(options))
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      // 将每个依赖包打包成单独的js文件
      const optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        },
        // 移除console
        minimizer: [new UglifyPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true, // console
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        })]
      }
      Object.assign(config, {
        optimization
      })
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 属性值包裹在lessOptions内
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    inline: true, // 开启实时刷新
    host: '0.0.0.0', // 允许外部ip访问
    port: 8080, // 端口
    https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true, // 允许websockets跨域
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
    // 代理转发配置，用于调试环境
  },
  // 第三方插件配置
  pluginOptions: {}
}
