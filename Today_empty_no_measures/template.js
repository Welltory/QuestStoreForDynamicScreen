var colors = require("../Templates/pallete.js");
var hr = require("../Templates/hr.js")();
var vr = require("../Templates/vr.js")();
var image = require("../Templates/image.js");
var tag_small = require("../Templates/tag_small.js");
var cell = require("../Templates/cell.js");

module.exports = function(data) {
    var content = [];

    var header = {
        "type": "hbox",
        "items": [require("../Templates/image.js")({
            "name": "ic_heart.png",
            "width": 32,
            "height": 32
        }), {
            "type": "text",
            "text": "Measure now!",
            "style": "text_card_20_title",
            "weight": 1,
            "margin": {
                "left": 16
            }
        }],
        margin: {
            top: 16,
            bottom: 16,
            left: 26,
            right: 26
        }
    }
    var items = [header, hr];

    items.push({
        "type": "hbox",
        "items": [cell({
            icon: {
                "margin": {
                    "top": 14,
                    "bottom": 9
                },
                "type": "circle_progress",
                "progress": 5,
                "height": 71,
                "total": 5,
                "progress_color": colors.progress_green,
            },
            tag_text: "High",
            color: colors.tag_green,
            title: "Customized"
        }), vr, cell({
            icon: {
                "type": "text",
                "text": "4",
                "style": "text_indicator_green"
            },
            tag_text: "Streak",
            color: colors.tag_green,
            title: "Days"
        })]
    });

    items.push(hr);

    items.push({
        "type": "hbox",
        "items": [{
                "type": "text",
                "text": "29",
                "style": "text_counter",
                "width": 39
            }, {
                "type": "text",
                "text": "measurements left to start changing your life effortlessly, measurements left to start changing your life effortlessly",
                "style": "text_card_desription",
                "weight": 1,
                "margin": {
                    "left": 26
                }
            }
        ],
        // height: 21,
        "margin": {
            left: 24,
            right: 18,
            top: 14,
            bottom: 14
        }
    });

    content.push({
        "type": "cell",
        "items": items
    });

    content.push({
        "type": "cell",
        "items": [{
            "type": "hbox",
            "items": [{
                    "type": "text",
                    "text": "Last measured: Oct 27, 2017",
                    "style": "text_card_title",
                    "weight": 1
                },
                image({
                    "name": "icon_cell_chevron_right.png",
                    "width": 32,
                    "height": 32
                })
            ],
            height: 65,
            "margin": {
                left: 24,
                right: 18
            }
        }, hr, {
            "type": "hbox",
            "items": [{
                    "type": "text",
                    "text": "Tags: ",
                    "style": "text_card_desription"
                }, {
                    "type": "text",
                    "text": "after meal, sport",
                    "style": "text_card_desription",
                    "weight": 1
                },
                tag_small({
                    "text": "Good",
                    "color": colors.tag_green
                }, {
                    width: 72
                })
            ],
            height: 21,
            "margin": {
                left: 24,
                right: 18,
                top: 14,
                bottom: 14
            }
        }]
    });
    return {
        "content": content
    };
}
