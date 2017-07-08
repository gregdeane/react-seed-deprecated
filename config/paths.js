const path = require('path');

const getPath = (...args) => {
  const localPath = path.resolve(__dirname, '..');
  return path.join(...[localPath].concat(...args));
};

module.exports = {
  root: '/',
  dist: getPath('dist'),
  src: getPath('src'),
  config: getPath('config'),
  vendorJs: getPath('src', 'vendor.js'),
  indexJs: getPath('src', 'index.js'),
  indexHtml: getPath('src', 'index.html'),
  styles: getPath('src', 'styles'),
  staticDir: {
    images: getPath('src/static', 'images'),
    icons: getPath('src/static', 'icons'),
    favicons: getPath('src/static', 'favicons'),
  },
  aliases: {
    components: getPath('src', 'components'),
    data: getPath('src', 'data'),
    scenes: getPath('src', 'scenes'),
    services: getPath('src', 'services'),
    store: getPath('src', 'store'),
  },
};
