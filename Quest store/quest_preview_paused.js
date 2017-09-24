module.exports = {
    "title": "Paused",
    "background": require("./image_preview_background.js"),
    "items": [{
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
