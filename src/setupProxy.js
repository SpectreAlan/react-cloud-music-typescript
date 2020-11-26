const {createProxyMiddleware} = require('http-proxy-middleware')
const defaultSettings = require('./config/settings')

module.exports = (app) => {
  app.use(
    createProxyMiddleware(defaultSettings.baseUrl, {
      target: defaultSettings.proxy,
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        ['^' + defaultSettings.baseUrl]: ''
      }
    })
  )
}
