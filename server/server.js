/* eslint-disable import/newline-after-import*/
const loopback = require('loopback');
const boot = require('loopback-boot');
const app = module.exports = loopback();
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require(`../webpack.config.${mode}`); // eslint-disable-line import/no-dynamic-require
const compiler = webpack(config);
/* eslint-enable import/newline-after-import*/

if (mode === 'development') {
  // only need in development
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
}
app.use(webpackHotMiddleware(compiler));
// start the web server
app.start = () => app.listen(() => {
  app.emit('started');
  const baseUrl = app.get('url').replace(/\/$/, '');
  console.log('Web server listening at: %s', baseUrl); // eslint-disable-line no-console
  if (app.get('loopback-component-explorer')) {
    const explorerPath = app.get('loopback-component-explorer').mountPath;
    console.log('Browse your REST API at %s%s', baseUrl, explorerPath); // eslint-disable-line no-console
  }
});

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, (err) => {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});
