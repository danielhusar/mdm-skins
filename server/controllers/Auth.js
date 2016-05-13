import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User';
import { ENV } from '../../helpers/config';

passport.use(new GoogleStrategy({
  clientID: ENV.GOOGLE_CLIENT_ID,
  clientSecret: ENV.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
},
  (accessToken, refreshToken, profile, cb) => {
    User.update({ google_id: profile.id }, {
      google_id: profile.id,
      email: profile.emails[0].value,
      photo: profile.photos[0].value,
      last_logged_at: new Date(),
    }, { upsert: true, setDefaultsOnInsert: true }, err => {
      if (err) throw err;
      cb(null, profile);
    });
  }
));
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

export function login() {
  return passport.authenticate('google', { scope: ['email'] });
}

export function callback() {
  return passport.authenticate('google', { failureRedirect: '/' });
}

export function redirect() {
  return (req, res) => res.redirect(req.session.returnTo || '/books');
}

export { passport };
