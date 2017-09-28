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
            "text": "In progress",
            "style": "text_title_preview"
        },
        {
            "type": "spacer",
            "weight": 1
        },
        {"type": "progress", "value": 0.2,
        "margin": {
            "left": 21,
            "top": 18,
            "right": 21,
            "bottom": 18
        }}]
}