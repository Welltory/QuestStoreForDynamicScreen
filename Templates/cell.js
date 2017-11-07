module.exports = function (params) {
    var icon = params.icon;
    var tag_text = params.tag_text;
    var color = params.color;
    var title = params.title;
    icon.margin = icon.margin || {
        "top": 4
    };
    icon.width = icon.width || 90;
    icon.height = icon.height || 90;

    var tag = require("../Templates/tag_small.js")({
        "text": tag_text,
        "color": color
    });
    tag.width = 100;

    var title_component = {
        "type": "text",
        "text": title,
        "style": "text_card_label_text",
        "margin": {
            "top": 8
        }
    };

    return {
        "type": "vbox",
        "weight": 1,
        "margin": {
            bottom: 24,
        },
        "items": [
            {
                "type": "vbox",
                "height": 120,
                "items": [
                    icon, {
                        type: "hbox",
                        items: [{
                            type: "spacer",
                            weight: 1
                        },
                            tag, {
                            type: "spacer",
                            weight: 1
                        },
                        ]
                    }
                ]
            }
            , title_component]
    };
}
