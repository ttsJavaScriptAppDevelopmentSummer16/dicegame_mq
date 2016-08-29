module.exports = {
  entry: {
    app: "./app/javascript/"
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
};
