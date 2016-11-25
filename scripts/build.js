var fs = require('fs-extra');
var rimrafSync = require('rimraf').sync;
var mkdirp = require('mkdirp');

var WWW_DIR = 'server/www'

// Remove all content but keep the directory so that
// if you're in it, you don't end up in Trash
rimrafSync(WWW_DIR + '/*');
mkdirp(WWW_DIR);

fs.copySync('client/build', WWW_DIR);

console.log(WWW_DIR + ' is ready');
