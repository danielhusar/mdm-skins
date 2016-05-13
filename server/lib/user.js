export function loggedIn(req, res, next) {
  if (!req.url.startsWith('/profile') || req.isAuthenticated()) {
    return next();
  } else {
    req.session.returnTo = req.originalUrl || req.url; // eslint-disable-line
    return res.redirect('/');
  }
}

export function loggedInApi(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send(404);
  }
}
