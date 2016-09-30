import steamUserInventory from 'steam-user-inventory';
import loggedIn from '../lib/user';

export function user(req, res) {
  return res.json({ user: global.__user || req.user || null });
}

export function inventory(req, res) {
  return steamUserInventory(global.__user.personaname).then(data => res.json(data));
}
