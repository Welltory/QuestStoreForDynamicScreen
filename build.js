#!/usr/bin/env node

var params = [];
var options = [];

process.argv.forEach(function(value) {
	if (value.match(/--.*/)) {
		options.push(value);
	} else {
		params.push(value);
	}
})

var template_name = params[2];
var template = require("./"+template_name+"/template.js");

var sample_name = params[3]||"data";
var data = require("./"+template_name+"/"+sample_name+".json");

var x = options.includes("--simple") ? template(data) : { "result": template(data), "success": true };

console.log(JSON.stringify(x, null, 2));