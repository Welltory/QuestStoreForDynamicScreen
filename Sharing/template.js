module.exports = function (data) {
    var content = [
        {
            "type": "spacer",
            "weight": 112,
        },
        require("./share_item")(data),
        {
            "type": "spacer",
            "weight": 101,
        }
    ];
    var footer = [
        {
            "style": "button_orange",
            "action": {
                "type": "redirect",
                "url": "welltory://modal/ShareMeasurement/1"
            },
            "margin": {
                "left": 10,
                "right": 10,
                "bottom": 10,
                "top": 10
            },
            "icon": {
                "width": 48,
                "height": 48,
                "url": "https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/ic_share.png?raw=true"
            },
            "text": "Share results",
            "type": "button"
        }
    ];
    return {
        "content": content,
        "footer": footer,
        "title": "Share results"
    };
}
