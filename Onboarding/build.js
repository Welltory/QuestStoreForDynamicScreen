#!/usr/bin/env node

var x = {
    "result": require("./onboarding_wellness_page.js"),
    "success": true
};

console.log(JSON.stringify(x, null, 2));