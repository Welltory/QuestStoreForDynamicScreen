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
        }
        ,require("./status_comingsoon_preview.js")
    ]
}
