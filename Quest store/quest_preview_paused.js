module.exports = {
    "title": "Paused",
    "background": require("./image_preview_background.js"),
    "items": [{
        "style": "button_orange_preview",
        "action": require("./action_unpause.js"),
        "text": "Continue",
        "type": "button"
    }],
    "action": require("./action_page_unpause.js")
}
