module.exports = function(params){
    return {
        "type": "cell",
        "items": [
            {
                "type": "hbox",
                "margin": {
                    "top": 16,
                    "left": 24,
                    "right": 16
                },
                "items": [
                    {
                        "type": "text",
                        "text": params.titleText,
                        "style": "text_title_cell"
                    },
                    {
                        "type": "spacer",
                        "weight": 1
                    },
                    {
                        "type": "image",
                        "image": {
                            "url": "https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/ic_locked.png?raw=true",
                            "width": 28,
                            "height": 34
                        }
                    }
                ]
            },
            {
                "type": "text",
                "style": "text_default",
                "margin": {
                    "left": 24,
                    "right": 18,
                    "top": 1
                },
                "text": params.descriptionText
            },
            {
                "type": "hbox",
                "items": [
                    {
                        "type": "button",
                        "style": "button_orange_preview",
                        "text": params.buttonText,
                        "margin": {
                            "left": 24,
                            "top": 16,
                            "right": 24,
                            "bottom": 26
                        },
                        "action": params.buttonAction
                    },
                    {
                        "type": "spacer",
                        "weight": 1
                    }                    
                ]
            },
            
        ]
    };
}
