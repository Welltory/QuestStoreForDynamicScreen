#!/usr/bin/env node

var template_name = process.argv[2];
var template = require("./"+template_name+"/template.js");

var sample_name = process.argv[3]||"data";
var data = require("./"+template_name+"/"+sample_name+".json");

var x = {
    "result": template(data),
    "success": true
};

console.log(JSON.stringify(x, null, 2));