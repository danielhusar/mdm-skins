import Item from '../models/Item';

export function sell(req, res) {
  new Item({
    ...req.body,
    seller: req.user._id,
  })
  .save()
  .then(
    () => res.json(),
    () => res.sendStatus(422)
  );
}

export function remove(req, res) {
  Item.update({
    _id: req.body._id,
    seller: req.user._id,
  }, {
    seller_status: 'deleted',
  })
  .then(
    () => res.json(),
    () => res.sendStatus(422)
  );
}
