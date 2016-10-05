/* eslint new-cap: 0 */
import chalk from 'chalk';
import { connect } from './lib/mongo';
import Application from './controllers/Application';
import { config, isDevelopment } from '../helpers/config';

global.__SERVER__ = true;

connect(() => {
  const app = Application();

  // Start app
  app.listen(config.port, (error) => {
    if (!error && isDevelopment()) {
      console.log(chalk.blue(`App is running on: http://localhost:${config.port}`)); // eslint-disable-line
    }
  });
});
