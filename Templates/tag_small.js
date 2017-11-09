/*
    
*/

var colors = require("../Templates/pallete.js");

module.exports = function(params, extend) {
    var pallete = [colors["tag_green"], colors["tag_yellow"], colors["tag_red"]];
    
    var textStyles = {};
    textStyles[colors.tag_green]  = "text_tag_white";
    textStyles[colors.tag_yellow] = "text_tag_black";
    textStyles[colors.tag_red]    = "text_tag_white";
    textStyles[colors.tag_grey]   = "text_tag_black";

    var color = colors["tag_green"];
    var text_style = "text_tag_white";
    if (params.color) {
        color      = params.color;
        text_style = params.text_style||textStyles[color]||text_style;
    } else if (params.value) {
        var index = Math.max(Math.min(Math.round(params.value * pallete.length), pallete.length - 1), 0);
        color = pallete[index];
        text_style = textStyles[color]||text_style;
    }

    var result = {
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
    };
    
    if (extend) {
        for (var key in extend) {
            result[key] = extend[key];
        }
    }
    
    return result;
};
