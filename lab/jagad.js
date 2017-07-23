'use strict';

var merge = require('merge-descriptors');
var http = require('./http');

var $_ = {};

merge($_, http, false);

module.exports = $_;