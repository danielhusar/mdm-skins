import test from 'ava';
import { connect, dropDb } from '../../lib/mongo';
import User from '../User';
connect();
dropDb();

test.afterEach(() => {
  return dropDb();
});

test.serial('Create new user', async t => {
  await User.update({ google_id: 1 }, {
    google_id: '1',
    email: 'email@email.com',
    photo: 'foo.jpg',
  }, {
    upsert: true,
    setDefaultsOnInsert: true,
  });

  const users = await User.find().exec();
  t.is(users.length, 1);
});
