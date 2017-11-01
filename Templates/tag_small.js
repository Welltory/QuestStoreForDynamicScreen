/*
    
*/

module.exports = function(params) {

    var pallete = [{
        color: "#33E686",
        style: "text_value_bold_white"
    }, {
        color: "#FFF46E",
        style: "text_value_bold_black"
    }, {
        color: "#FD666F",
        style: "text_value_bold_white"
    }];

    var color = "#29DB7B";
    var text_style = "text_value_bold_white";
    if (params.color) {
        color = params.color;
        text_style = params.text_style || text_style;
    } else if (params.value) {
        var index = Math.max(Math.min(Math.round(params.value * pallete.length), pallete.length - 1), 0);
        color = pallete[index].color;
        text_style = pallete[index].style;
    }

    return {
        "type": "hbox",
        "items": [{
            "type": "spacer",
            "weight": 1
        }, {
            "type": "hbox",
            "items": [{
                "type": "text",
                "style": text_style,
                "text": params.text,
                "margin": {
                    "top": 2,
                    "left": 7,
                    "bottom": 2,
                    "right": 7
                }
            }],
            "component_style": {
                "background_color": color,
                "corner_radius": 100
            }
        }, {
            "type": "spacer",
            "weight": 1
        }]
    }
};
