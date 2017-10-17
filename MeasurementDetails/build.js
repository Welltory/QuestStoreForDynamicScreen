#!/usr/bin/env node

var x = {
    "result": require("./measurement_details.js"),
    "success": true
};

console.log(JSON.stringify(x, null, 2));