import Item from '../models/Item';
const limit = 9;

export function total(req, res) {
  Item.find({
    seller_status: 'selling'
  })
  .count()
  .then(
    total => res.json({ total, limit }),
    () => res.sendStatus(422)
  );
}

export function browse(req, res) {
  const offset = (Number(req.body.page) || 0) * limit;

  Item.find({
    seller_status: 'selling'
  })
  .sort({ updatedAt: -1 })
  .limit(limit)
  .skip(offset)
  .populate('seller')
  .exec()
  .then(
    data => res.json(data),
    () => res.sendStatus(422)
  );
}
