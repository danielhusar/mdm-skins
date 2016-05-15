// import User from '../models/user';

export function user(req, res) {
  return res.json({ user: req.user || null });
}
