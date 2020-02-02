const path = require('path');

module.exports = {
  displayName: {
    name: 'jest',
    color: 'cyan',
  },
  preset: 'jest-preset-kyt',
  snapshotSerializers: ['enzyme-to-json/serializer', 'pretty-lights/jest'],
  rootDir: path.resolve(__dirname, '..'),
};
