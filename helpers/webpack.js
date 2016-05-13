// Webpack Requirements
import webpack from 'webpack';
import config from '../config/development/webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export default function webpackMiddleware(app) {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath, stats: { colors: true } }));
  app.use(webpackHotMiddleware(compiler));
}
