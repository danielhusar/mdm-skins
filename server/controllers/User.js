import steamUserInventory from 'steam-user-inventory';
import loggedIn from '../lib/user';
import Item from '../models/Item';

export function user(req, res) {
  res.json({ user: req.user || null });
}

export function inventory(req, res) {
  steamUserInventory(req.user.personaname)
    .then(data => res.json(data));
}

export function sellItem(req, res) {
  new Item({
    ...req.body,
    user: req.user._id
  })
  .save()
  .then(
    () => res.json({ success: true }),
    () => res.json({ success: false })
  );
}
