import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  id: { type: 'String', required: true },
  communityvisibilitystate: { type: 'Number', required: true },
  profilestate: { type: 'Number', required: true },
  personaname: { type: 'String', required: true },
  profileurl: { type: 'String', required: true },
  avatar: { type: 'String', required: true },
  personastate: { type: 'Number', required: true },
  realname: { type: 'String', required: true },
  timecreated: { type: 'Number', required: true },
  personastateflags: { type: 'Number', required: true },
  loccountrycode: { type: 'String', required: true },
  locstatecode: { type: 'String', required: true },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
