import mongoose, { Schema } from 'mongoose';

const itemSchema = new Schema({
  id: { type: 'String', required: true },
  user_id: { type: 'ObjectId', ref: 'User' },
  amount: { type: 'Number', required: true },
  pos: { type: 'Number', required: true },
  name: { type: 'String', required: true },
  appid: { type: 'String', required: true },
  classid: { type: 'String', required: true },
  instanceid: { type: 'String', required: true },
  tradable: { type: 'Number', required: true },
  marketable: { type: 'Number', required: true },
  marketTradableRestriction: { type: 'String', required: true },
  link: { type: 'String', required: true },
  image: { type: 'String', required: true },
  category: { type: 'String' },
  type: { type: 'String' },
  exterior: { type: 'String' },
  quality: { type: 'String' },
  price: { type: 'Number', required: true },
  created_at: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Item', itemSchema);
