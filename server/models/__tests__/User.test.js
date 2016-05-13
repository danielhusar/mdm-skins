import test from 'ava';
import { connect, dropDb } from '../../lib/mongo';
import User from '../User';
connect();
dropDb();

test.afterEach(() => {
  return dropDb();
});

const user = {
  steamid: '1',
  communityvisibilitystate: 3,
  profilestate: 1,
  personaname: 'awtt',
  lastlogoff: 1463090298,
  profileurl: 'http://steamcommunity.com/id/awtt/',
  avatarfull: 'full.jpg',
  personastate: 1,
  realname: 'Daniel Husar',
  primaryclanid: '1',
  timecreated: 1328910898,
  personastateflags: 0,
  loccountrycode: 'SK',
}

test.serial('Create new user', async t => {
  await User.update({ steamid: 1 }, user, {
    upsert: true,
    setDefaultsOnInsert: true,
  });

  const users = await User.find().exec();
  t.is(users.length, 1);
});

test.serial('Update new user', async t => {
  await User.update({ steamid: 1 }, user, {
    upsert: true,
    setDefaultsOnInsert: true,
  });

  await User.update({ steamid: 1 }, {
    ...user,
    personaname: 'tomasisko',
  }, {
    upsert: true,
    setDefaultsOnInsert: true,
  });

  const users = await User.find().exec();
  t.is(users.length, 1);
  t.is(users[0].steamid, '1');
  t.is(users[0].personaname, 'tomasisko');
});
