/* eslint no-underscore-dangle:0 */

import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';
import User from '../models/User';
import { ENV, config } from '../../helpers/config';

passport.use(new SteamStrategy({
  apiKey: ENV.STEAM_API,
  realm: config.baseURL,
  returnURL: `${config.baseURL}/auth/steam/callback`,
},
  (identifier, profile, cb) => {
    User.update({ steamid: profile.id }, {
      steamid: profile.id,
      communityvisibilitystate: profile._json.communityvisibilitystate,
      profilestate: profile._json.profilestate,
      personaname: profile._json.personaname,
      profileurl: profile._json.profileurl,
      avatar: profile._json.avatarfull,
      personastate: profile._json.personastate,
      realname: profile._json.realname,
      timecreated: profile._json.timecreated,
      personastateflags: profile._json.personastateflags,
      loccountrycode: profile._json.loccountrycode,
      locstatecode: profile._json.locstatecode,
      last_logged_at: new Date(),
    }, { upsert: true, setDefaultsOnInsert: true }, err => {
      if (err) throw err;
      cb(null, profile);
    });
  }
));
passport.serializeUser((user, cb) => cb(null, user._json));
passport.deserializeUser((obj, cb) => cb(null, obj));

export function login() {
  return passport.authenticate('steam', { failureRedirect: '/' });
}

export function callback() {
  return passport.authenticate('steam', { failureRedirect: '/' });
}

export function redirect() {
  return (req, res) => res.redirect(req.session.returnTo || '/');
}

export { passport };
