module.exports =
{
    "title": "Act",
    "content": [
        {
            "type": "spacer",
            "height": 25
        },
        {
            "type": "carousel",
            "title": "HEALTH (ru)",
            "icon": require("./image_category.js"),
            "items": [
                require("./quest_preview_comingsoon.js"),
                require("./quest_preview_complete.js"),
                require("./quest_preview_inprogress.js"),
                require("./quest_preview_paused.js")
            ]
        }
    ]
}