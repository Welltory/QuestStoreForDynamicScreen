module.exports = function(params){
    return {
        "type": "cell",
        "items": [
            {
                "type": "hbox",
                "margin": {
                    "top": 24,
                    "left": 24,
                    "right": 24,
                    "bottom": 24
                },
                "items": [
                    {
                        "type": "text",
                        "style": "text_title_cell",
                        "text": params.title
                    },
                    {
                        "type": "spacer",
                        "weight": 1
                    },
                    {
                        "type": "image",
                        "image": {
                            "url": "https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/ic_link.png?raw=true",
                            "width": 32,
                            "height": 19
                        }
                    }
                ]
            }
        ],
        "action": {
            "type": "redirect",
            "url": "https://ya.ru"
        }
    }
}