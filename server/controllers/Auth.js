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
    User.update({ id: profile.id }, {
      id: profile.id,
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
    }, { upsert: true, setDefaultsOnInsert: true })
    .then(() => User.findOne({ id: profile.id }))
    .then(profile => cb(null, profile));
  }
));
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));

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
