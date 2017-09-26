#!/usr/bin/env node

var x = {
    "result": {
        "title": "Tasks list example",
        "refresh_url": "https://raw.githubusercontent.com/lazarev/QuestStoreForDynamicScreen/master/task_list.json",
        "content": [
            {
                "type": "spacer",
                "height": 18
            },
            require("./task_1.js"),
            require("./task_2.js"),
            require("./task_3.js"),
            require("./task_4.js"),
            {
                "type": "spacer",
                "height": 18
            }
        ]
    },
    "success": true
}

console.log(JSON.stringify(x, null, 2));