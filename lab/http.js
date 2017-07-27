'use strict';

// https://nodejs.org/api/http.html
var http = require('http');
var url = require('url');
var querystring = require('querystring')
var fs = require('fs')
var chalk = require('chalk')

//$ as object of root jagadjs
var $_ = {};

var log = console.log

//Handle Request 
$_.requestListener = function(req, res) {
  
  res.writeHead(200,{'Content-type': 'text-plan'});
  res.end('ok');
  var pathName= url.parse(req.url);
  console.log(pathName);  
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


  log(chalk.green(
	      'JAGADJS => listen:3000'
     ))
      
  return server.listen(3000);
};

module.exports = $_;
