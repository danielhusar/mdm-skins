import steamUserInventory from 'steam-user-inventory';
import loggedIn from '../lib/user';
import Item from '../models/Item';

export function user(req, res) {
  return res.json({ user: req.user || req.user || null });
}

export function inventory(req, res) {
  return steamUserInventory(req.user.personaname).then(data => res.json(data));
}

export function sellItem(req, res) {
  console.log(req.body);
  console.log(req.user);

  const item = new Item({
    ...req.body,
    user_id: req.user.id
  });

  item.save(function (err) {
    console.log(err);
    if (err) {
      return res.json({ success: false });
    } else {
      return res.json({ success: true });
    }
  });
}
