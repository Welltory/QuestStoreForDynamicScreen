module.exports = function(params){
    return {
        "type": "cell",
        "items": [
            {
                "type": "hbox",
                "margin": {
                    "top": 14,
                    "left": 18,
                    "right": 18
                },
                "items": [
                    {
                        "type": "image",
                        "image": {
                            "url": params.iconUrl,
                            "width": 16,
                            "height": 16
                        }
                    },
                    {
                        "type": "text",
                        "style": "text_title_cell",
                        "text": params.title,
                        "margin": {
                            "left": 11
                        }
                    }                    
                ]
            },
            {
                "type": "spacer",
                "component_style": {
                    "background_color": "#F0F1F4"
                },
                "height": 1
            },
            require("./details_table_row.js")({
                "parameter": "Pulse",
                "units": "Bpm",
                "value": "61"
            }),
            {
                "type": "spacer",
                "component_style": {
                    "background_color": "#F0F1F4"
                },
                "height": 1
            },
            require("./details_table_row.js")({
                "parameter": "Systolic pressure",
                "units": "mm Hg",
                "value": "-"
            }),
            {
                "type": "spacer",
                "component_style": {
                    "background_color": "#F0F1F4"
                },
                "height": 1
            },
            require("./details_table_row.js")({
                "parameter": "Diastolic pressure",
                "units": "mm Hg",
                "value": "-"
            }),
            {
                "type": "spacer",
                "component_style": {
                    "background_color": "#F0F1F4"
                },
                "height": 1
            }
        ]
    };
}
