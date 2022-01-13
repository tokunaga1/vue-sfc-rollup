const webpack = require('webpack')

module.exports = {
  pluginOptions: {
    // electronBuilder: {
    //   nodeIntegration: true,
    //   mainProcessFile: 'dev/background.js',
    //   rendererProcessFile: 'dev/serve.js',
    // }
  },
<% if (storeModuleName) { %>
  configureWebpack: config => {
    config.plugins.push(new webpack.ProvidePlugin({
      mapState: ['vuex', 'mapState'],
      mapGetters: ['vuex', 'mapGetters'],
      mapMutations: ['vuex', 'mapMutations'],
      mapActions: ['vuex', 'mapActions'],
    }))
  }
<% } -%>
}
