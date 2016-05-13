const env = process.env.NODE_ENV || 'development';
const cfg = require(`../config/${env}/config`);

export const config = cfg;
export const ENV = process.env;

export function isProduction() {
  return env === 'production';
}

export function isDevelopment() {
  return env === 'development';
}

export function isTest() {
  return env === 'test';
}
