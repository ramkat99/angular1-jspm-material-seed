'use strict';

// this will automatically compile gulp tasks files on the fly from ES6 to ES5
require('babel-core/register');

// require all tasks
require('require-dir')('./gulp/tasks', { recurse: true });
