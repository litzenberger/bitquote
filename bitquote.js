/* Copyright (c) 2014 Ron Litzenberger, MIT License */
"use strict";

function bitquote(){
  	var request = require('request');
  	var cheerio = require('cheerio');
	request('http://www.coinbase.com', function (error, response, html) {
  	if (!error && response.statusCode == 200) {
     	var $ = cheerio.load(html);
    	$('li.top-balance').each(function(i, element){
      	var a = $(this);
      	console.log(a.text());
    });} 
});
}

module.exports = bitquote;