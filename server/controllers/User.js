import steamUserInventory from 'steam-user-inventory';
import loggedIn from '../lib/user';

export function user(req, res) {
  return res.json({ user: req.user || req.user || null });
}

export function inventory(req, res) {
  return steamUserInventory(req.user.personaname).then(data => res.json(data));
}

export function sellItem(req, res) {
  return res.json({ success: true });
}
