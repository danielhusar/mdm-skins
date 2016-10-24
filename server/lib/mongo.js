import mongoose from 'mongoose';
import { config, isDevelopment } from '../../helpers/config';

mongoose.Promise = global.Promise;
// mongoose.set('debug', isDevelopment());

export function connect(cb) {
  if (mongoose.connection.readyState !== 0) {
    return Promise.resolve();
  }

  return mongoose.connect(config.mongoURL, (error, connection) => {
    if (error) {
      throw error;
    }

    if (cb) {
      cb(connection);
    }
  });
}

export function close() {

}


export function dropDb() {
  return mongoose.connection.db.dropDatabase();
}
