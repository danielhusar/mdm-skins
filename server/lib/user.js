export function loggedIn(req, res, next) {
  if (!req.url.startsWith('/profile') || req.isAuthenticated()) {
    return next();
  }

  req.session.returnTo = req.originalUrl || req.url; // eslint-disable-line
  return res.redirect('/');
}

export function loggedInApi(req, res, next) {
  if (!req.url.startsWith('/api/auth') || req.isAuthenticated()) {
    return next();
  }

  return res.sendStatus(403);
}
