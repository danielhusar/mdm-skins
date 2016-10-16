import Item from '../models/Item';
const limit = 9;

export function browse(req, res) {
  const page = Number(req.body.page) || 1;
  const offset = (page * limit) - limit;
  const count = Item.find({
    seller_status: 'selling'
  })
  .count();

  const browse = Item.find({
    seller_status: 'selling'
  })
  .sort({ updatedAt: -1 })
  .limit(limit)
  .skip(offset)
  .populate('seller')
  .exec();

  Promise.all([count, browse])
  .then(
    data => {
      res.json({
        limit,
        count: data[0],
        page,
        pages: Math.ceil(data[0] / limit),
        items: data[1],
      });
    },
    () => res.sendStatus(422)
  );
}
