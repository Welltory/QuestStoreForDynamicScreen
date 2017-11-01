/*
    
*/

module.exports = function(params) {

    var pallete = ["#33E686", "#FFF46E", "#FD666F"];
    
    var textStyles = {
        "#33E686": "text_tag_white",
        "#FFF46E": "text_tag_black",
        "#FD666F": "text_tag_white",
        "#F0F1F4": "text_tag_black"
    }

    var color = "#29DB7B";
    var text_style = "text_tag_white";
    if (params.color) {
        color      = params.color;
        text_style = params.text_style||textStyles[color]||text_style;
    } else if (params.value) {
        var index = Math.max(Math.min(Math.round(params.value * pallete.length), pallete.length - 1), 0);
        color = pallete[index];
        text_style = textStyles[color]||text_style;
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
                "weight": 1,
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
