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
                        "style": "text_title_cell",
                        "margin": {
                            "left": 8
                        }
                    },
                    {
                        "type": "spacer",
                        "weight": 1
                    },
                    {
                        "type": "hbox",
                        "width": 115,
                        "height": 38,
                        "component_style":{
                            "background_color": params.valueBgColor,
                            "corner_radius": 3
                        },
                        "items": [
                            {
                                "type": "spacer",
                                "weight": 1
                            },
                            {
                                "type": "text",
                                "style": params.blackFont?"text_value_bold_black":"text_value_bold_white",
                                "text": params.value,
                            },
                            {
                                "type": "spacer",
                                "weight": 2
                            },
                            {
                                "type": "text",
                                "style": params.blackFont?"text_value_black":"text_value_white",
                                "text": params.valuePercent,
                            },
                            {
                                "type": "spacer",
                                "weight": 1
                            }
                        ]   
                    }
                ]
            },
            {
                "type": "text",
                "style": "text_default",
                "margin": {
                    "left": 24,
                    "right": 18,
                    "top": 21,
                    "bottom": 17
                },
                "text": params.descriptionText
            }
        ]
    };
}
