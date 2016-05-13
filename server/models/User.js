import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: { type: 'String', required: true },
  photo: { type: 'String', required: true },
  google_id: { type: 'String', required: true },
  created_at: { type: 'Date', default: Date.now, required: true },
  last_logged_at: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', userSchema);
