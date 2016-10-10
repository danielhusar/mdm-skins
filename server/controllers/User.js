import steamUserInventory from 'steam-user-inventory';
import Item from '../models/Item';

export function user(req, res) {
  res.json({ user: req.user || null });
}

export function inventory(req, res) {
  steamUserInventory(req.user.personaname)
    .then(data => res.json(data));
}

export function selling(req, res) {
  Item.find({
    seller: req.user._id,
    seller_status: 'selling'
  })
  .sort({updatedAt: -1})
  .populate('seller')
  .exec()
  .then(data => res.json(data));
}
