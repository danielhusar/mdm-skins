import path from 'path';
import Express from 'express';
import session from 'express-session';
import cookie from 'cookie-parser';
import bodyParser from 'body-parser';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import { login, callback, redirect, passport } from './Auth';
import { loggedIn } from '../lib//user';
import webpackMiddleware from '../../helpers/webpack';
import { ENV, isDevelopment } from '../../helpers/config';
// import Api from '../routes/Api';
import Content from './Content';

export default function () {
  const app = new Express();
  if (isDevelopment()) {
    webpackMiddleware(app);
  }

  app.use(cookie());
  app.use(bodyParser.json({ limit: '2mb' }));
  app.use(bodyParser.urlencoded({ limit: '2mb', extended: false }));
  app.use(Express.static(path.resolve(__dirname, '../../static')));
  app.use(session({
    secret: ENV.SESSION_SECRET || '',
    resave: true,
    saveUninitialized: true,
    store: new (MongoStore(session))({ mongooseConnection: mongoose.connection }), // eslint-disable-line
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  // app.use('/api', Api);

  app.get('/auth/steam', login());
  app.get('/auth/steam/callback', callback(), redirect());
  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.use(loggedIn, Content);
  return app;
}
