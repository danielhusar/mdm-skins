import steamUserInventory from 'steam-user-inventory';

export function user(req, res) {
  res.json({ user: req.user || null });
}

export function inventory(req, res) {
  steamUserInventory(req.user.personaname)
    .then(data => res.json(data));
}
