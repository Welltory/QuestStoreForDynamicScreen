module.exports = function(params){
    return {
        "content": [
            {
                "type": "text",
                "style": "text_title_fullscreen_header1",
                "text": params.title
            },
            {
                "type":"spacer",
                "weight": 60
            },
            {
                "type": "hbox",
                "items": [
                    {
                        "type":"spacer",
                        "weight": 1
                    },
                    {
                        "type": "image",
                        "image": {
                            "url": params.image,
                            "width": 172,
                            "height": 172
                        }
                    },
                    {
                        "type":"spacer",
                        "weight": 1
                    }
                ]
            },
            {
                "type":"spacer",
                "weight": 60
            },
            {
                "type": "vbox",
                "height": 102,
                "items": [
                    {
                        "margin": {
                            "left":36,
                            "right":36
                        },
                        "type": "text",
                        "text": params.description,
                        "style": "text_default_fullscreen_center"
                    },
                    {
                        "type": "spacer",
                        "weight": 1
                    }
                ]
            },
            {
                "type":"spacer",
                "weight": 84
            },
            {
                "type": "button",
                "margin": {
                    "left": 10,
                    "right": 10,
                    "bottom": 10,
                    "top": 10
                },
                "text": params.buttonText,
                "action": params.buttonAction,
                "style": "button_orange"
            }
        ]
    }
}