module.exports = {
    "title": "Paused",
    "background": require("./image_preview_background.js"),
    "items": [{
        "style": "preview_orange",
        "action": require("./action_unpause.js"),
        "text": "Continue",
        "type": "button"
    }],
    "action": require("./action_page_unpause.js")
}
