const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const readDir = (dir, cb) => {
  fs.readdirSync(dir).map((d) => {
    const fullPath = path.resolve(dir, d);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readDir(fullPath, cb);
    } else if (stat.isFile()) {
     cb(fullPath);
    }
  })
};

const pre = path.resolve(__dirname, './api');
const data = {};

readDir(pre, (fullPath) => {
  // console.log('fullPath', fullPath);
  if (fullPath.endsWith('.js')) {
    const merge = (a, b) => {
      if (_.isArray(a)) {
        return a.concat(b);
      }
    }
    _.mergeWith(data, require(fullPath), merge);
    // const assign = (a, b) => _.isObject(a) ? _.assignWith(a, b, assign) : b;
    // _.assignWith(data, require(fullPath), assign);
  }
});

module.exports = data;
