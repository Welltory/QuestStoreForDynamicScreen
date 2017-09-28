module.exports = {
    "background": require("./image_preview_background.js"),
    "items": [
        {
            "type": "text",
            "margin": {
                "left": 21,
                "top": 21,
                "right": 21,
                "bottom": 0
            },
            "text": "Paused",
            "style": "text_title_preview"
        },
        {
            "type": "spacer",
            "weight": 1
        },
        {
        "style": "button_orange_preview",
        "action": require("./action_unpause.js"),
        "text": "Continue",
        "type": "button",
        "margin": {
            "left": 6,
            "top": 5,
            "right": 6,
            "bottom": 5
        },
    }],
    "action": require("./action_page_unpause.js")
}
