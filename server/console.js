/* eslint new-cap: 0 */
import repl from 'repl';
import { config, isDevelopment } from '../helpers/config';
import { connect } from './lib/mongo';
import User from './models/User';
import Item from './models/Item';

connect(() => {
  const env = isDevelopment() ? 'DEV': 'PROD';
  const replServer = repl.start({
    prompt: `MDM Skins (${env})> `,
  });

  replServer.context.User = User;
  replServer.context.Item = Item;
});
