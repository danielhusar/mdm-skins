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
