const VERSION = require('../package.json').version;

const IS_PROD = process.env.NODE_ENV === 'production';
const IS_DEV = !IS_PROD;

const ENV = {
  NODE_ENV: (IS_PROD && 'production') || 'development',
  VERSION,
  IS_PROD,
  IS_DEV,
};

const wrapStringValue = value => (
  typeof value !== 'string' ? value : JSON.stringify(value)
);

const wrapStringValues = (env) => {
  const wrappedEnv = {};

  Object.keys(env).forEach((name) => {
    wrappedEnv[name] = wrapStringValue(env[name]);
  });

  return wrappedEnv;
};

module.exports = {
  IS_PROD,
  IS_DEV,
  ENV,
  wrapStringValues,
};
