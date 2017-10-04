module.exports = {
    "background": require("./image_preview_background.js"),
    "items": [{
        "type": "text",
        "margin": {
            "left": 21,
            "top": 21,
            "right": 21,
            "bottom": 0
        },
        "text": "Coming soon",
        "style": "text_title_preview"
    }, {
        "type": "spacer",
        "weight": 1
    }, {
        "type": "hbox",
        "items":[
            {
               "image": {
                   "height": 24,
                   "url": "https://ucarecdn.com/cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb/",
                   "width": 25,
                   "uploadcare_id": "cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb"
               },
               "type": "image"
           },
           { 
               "type": "spacer",
               "weight": 1
           }
        ],
        "margin": {
            "left": 21,
            "bottom": 8,
            "right": 21
        }
    }, {
        "text": "Coming Soon",
        "type": "text",
        "style": "text_status_preview",
        "margin": {
            "left": 21,
            "bottom": 18,
            "right": 21
        }
    }]
}