function getVersion() {
  const newDate = new Date()
  const YYYY = newDate.getFullYear()
  const month = String(newDate.getMonth() + 1)
  const MM = month.padStart(2, '0')
  const date = String(newDate.getDate())
  const DD = date.padStart(2, '0')
  const hour = String(newDate.getHours())
  const HH = hour.padStart(2, '0')
  const minutes = String(newDate.getMinutes())
  const mm = minutes.padStart(2, '0')
  // uuid
  let d = Date.now()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now() // use high-precision timer if available
  }
  const uid = 'xxxx'.replace(/[x]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return `${YYYY}${MM}${DD}-${uid}${HH}${mm}`
}

const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const plugins = [
  new webpack.DefinePlugin({
    VERSION_FROM_WEBPACK: getVersion(),
    BABEL_ENV: process.env.BABEL_ENV,
  }),
  new BundleAnalyzerPlugin(),
]

// eslint-disable-next-line
const path = require('path')

module.exports = {
  // publicPath: `/${process.env.VUE_APP_URL_NAME}/`,
  publicPath: process.env.NODE_ENV === 'production' ? '/idiom/' : '/',
  lintOnSave: true,
  runtimeCompiler: true,
  configureWebpack: {
    plugins,
    output: { filename: '[name].[hash:8].js' },
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      scss: {
        additionalData: `
                  @import "@/scss/helpers/_viewport.scss";
              `,
      },
    },
  },
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icon') // 存svg圖片路徑
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ extract: false })
      .end()
    // eslint-disable-next-line
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
    config.module.rule('svg').exclude.add(dir) // 其他svg loader排除icons目錄
    config.module.rule('vue').use('vue-loader').loader('vue-loader')
    // eslint-disable-next-line
    config.externals = { vue: 'Vue' }
  },
}
