import Item from '../models/Item';

export function sell(req, res) {
  new Item({
    ...req.body,
    seller: req.user._id
  })
  .save()
  .then(
    () => res.json({ success: true }),
    () => res.json({ success: false })
  );
}

export function remove(req, res) {
  Item.update({
    seller: req.user._id,
    _id: req.body._id
  }, {
    seller_status: 'deleted'
  })
  .then(
    () => res.json({ success: true }),
    () => res.json({ success: false })
  );
}
