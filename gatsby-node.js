var path = require('path');

exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'src': path.resolve(__dirname, 'src')
      }
    }
  })
}