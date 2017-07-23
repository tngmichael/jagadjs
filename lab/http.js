'use strict';

// https://nodejs.org/api/http.html
var http = require('http');

var $_ = {};

$_.requestListener = function(req, res) {
  console.log('requestListener')
  res.end('ok');
};

$_.listen = function listen() {
  /*
    http.createServer([requestListener])#
    Added in: v0.1.13
    requestListener <Function>

    Returns: <http.Server>

    Returns a new instance of http.Server.

    The requestListener is a function which is automatically added to the 'request' event.
  */
  var server = http.createServer(this.requestListener);
  console.log('listen:3000')
  return server.listen(3000);
};

module.exports = $_;