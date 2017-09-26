#!/usr/bin/env node

var x = {
    "result": require("./all_quests.js"),
    "success": true
};

console.log(JSON.stringify(x, null, 2));