// import User from '../models/user';

export function user(req, res) {
  console.log(req.user);
  return res.json({ user: req.user || null });
}
