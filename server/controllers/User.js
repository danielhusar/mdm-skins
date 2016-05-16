// import User from '../models/user';

export function user(req, res) {
  return res.json({ user: global.__user || req.user || null });
}
