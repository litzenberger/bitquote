/* Copyright (c) 2014 Ron Litzenberger, MIT License */
"use strict";

function bitquote(done){
  	var request = require('request');
	request('https://coinbase.com/api/v1/prices/sell', function (error, response, html) {
  	if (!error && response.statusCode == 200) {
  		var a=JSON.parse(response.body);
      	done(a);
    }
});
}

module.exports = bitquote;