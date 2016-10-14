import mongoose, { Schema } from 'mongoose';

const itemSchema = new Schema({
  id: { type: 'String', required: true },
  amount: { type: 'Number', required: true },
  pos: { type: 'Number', required: true },
  name: { type: 'String', required: true },
  appid: { type: 'String', required: true },
  classid: { type: 'String', required: true },
  instanceid: { type: 'String', required: true },
  tradable: { type: 'Number', required: true },
  marketable: { type: 'Number', required: true },
  marketTradableRestriction: { type: 'String', required: true },
  link: { type: 'String' },
  image: { type: 'String', required: true },
  category: { type: 'String' },
  type: { type: 'String' },
  exterior: { type: 'String' },
  quality: { type: 'String' },
  price: { type: 'Number', required: true },

  seller: { type: 'ObjectId', ref: 'User', required: true },
  buyer: { type: 'ObjectId', ref: 'User' },
  seller_status: { type: 'String', default: 'selling', required: true }, // selling, sold, deleted
  buyer_status: { type: 'String', default: '' }, // purchased
  seller_confirmed: { type: 'Boolean', default: false, required: true },
  buyer_confirmed: { type: 'Boolean', default: false, required: true },
}, { timestamps: true });

itemSchema.index({ seller: 1 });

export default mongoose.model('Item', itemSchema);
