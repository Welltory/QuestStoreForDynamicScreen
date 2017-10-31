module.exports = function(params) {

    var header = {
        "type": "hbox",
        "items": []
    }

    header.items.push(
        require("../Templates/image.js")({
            "name": "ic_heart.png",
            "width": 24,
            "height": 24
        })
    );

    header.items.push({
        "type": "text",
        "text": params.time
    });

    var items = [header];

    items.push({
        "type": "hbox",
        "items": [{
                "type": "text",
                "text": "Recommendation",
                "weight": 1
            },
            require("../Templates/image.js")({
                "name": "ic_heart.png",
                "width": 24,
                "height": 24
            })
        ]
    });

    items.push({
        "type": "text",
        "text": params.recomendation

    });

    var hr = {
        "type": "spacer",
        "height": 1,
        "component_style": {
            "background_color": "#F0F1F4"
        }
    };

    var vr = {
        "type": "spacer",
        "width": 1,
        "component_style": {
            "background_color": "#F0F1F4"
        }
    };

    items.push(hr);

    items.push({
        "type": "hbox",
        "height": 160,
        "items": [{
                type: "vbox",
                weight: 1,
                items: [performanceIndicator(params.performance)]
            },
            vr, {
                "type": "vbox",
                weight: 1,
                items: [moodIndicator(params.mood)]
            }
        ]
    });

    items.push(hr);

    items.push({
        "type": "hbox",
        "height": 160,
        "items": [{
                type: "vbox",
                weight: 1,
                items: [energyIndicator(params.energy)]
            },
            vr, {
                type: "vbox",
                weight: 1,
                items: [stressIndicator(params.stress)]
            }
        ]
    });

    items.push(hr);

    var buttons = [require("../Templates/image.js")({
            "name": "measurement_button_pressure.png",
            "width": 65,
            "height": 65
        }),
        require("../Templates/image.js")({
            "name": "measurement_button_details.png",
            "width": 65,
            "height": 65
        }),
        require("../Templates/image.js")({
            "name": "measurement_button_remove.png",
            "width": 65,
            "height": 65
        }),
        require("../Templates/image.js")({
            "name": "measurement_button_share.png",
            "width": 65,
            "height": 65
        })
    ];

    buttons.forEach(function(item, index, array){
        item.margin = {
            "top": 8,
            "right": 6,
            "bottom": 8,
            "left": 6,
        }
    });
    
    items.push({
        type: "hbox",
        margin: {},
        items: [{
                type: "spacer",
                weight: 1
            },
            buttons[0],
            buttons[1],
            buttons[2],
            buttons[3], {
                type: "spacer",
                weight: 1
            }
        ]
    });

    params.tags.forEach(function(tag) {
        header.items.push(require("../Templates/tag_small.js")({
            text: tag
        }));
    });

    return {
        "type": "cell",
        "items": items
    };
}

function performanceIndicator(performance) {

    var red = "#FD666F";
    var yellow = "#FFF46E";
    var green = "#4BFD9D";
    var grey = "#F0F1F4";

    var color;

    if (performance <= 2) {
        color = red;
    } else if (performance == 3) {
        color = yellow;
    } else {
        color = green;
    }


    var title = {
        "type": "text",
        "text": "Mood",
        "style": "text_default_center"
    };


    return {
        "type": "vbox",
        "items": [{
            "margin": {
                "top": 16
            },
            "type": "circle_progress",
            "progress": performance,
            "total": 5,
            "progress_color": color
        }, {
            "type": "text",
            "text": "Performance",
            "style": "text_default_center",
            "margin": {
                "top": 11
            }
        }]
    };
}

function moodIndicator(mood) {

    var image = require("../Templates/image.js")({
        "name": "measurement_state_focused.png",
        "width": 100,
        "height": 80
    });
    image.margin = {
        "top": 9
    };

    var star = {
        "type": "hbox",
        "margin": {
            "top": 7
        },
        "items": [{
                "type": "spacer",
                "weight": 1
            }, {
                "type": "text",
                "style": "text_value_black",
                "text": "" + mood,
                "margin": {
                    "right": 7
                }
            },
            require("../Templates/image.js")({
                //                "name": "star_20_" + mood + ".png",
                "name": "ic_heart.png",
                "width": 20,
                "height": 20
            }), {
                "type": "spacer",
                "weight": 1
            }
        ]
    }

    star.items[2].margin = {
        "top": 3
    };

    var title = {
        "type": "text",
        "text": "Mood",
        "style": "text_default_center"
    };

    var result = {
        "type": "vbox",
        "items": [image, star, title]
    };

    return result;
}

function stressIndicator(stress) {

    step = Math.max(Math.min(Math.floor(stress/100*3+1), 3), 1);

    var image = require("../Templates/image.js")({
        "name": "measurement_stress_"+step+".png",
        "width": 100,
        "height": 80
    });
    image.margin = {
        "top": 9
    };

    var tag = require("../Templates/tag_small.js")({
        "text": "Low"
    })
    
    var title = {
        "type": "text",
        "text": "Stress",
        "style": "text_default_center"
    };

    var result = {
        "type": "vbox",
        "items": [image, tag, title]
    };

    return result;
}

function energyIndicator(energy) {

    step = Math.max(Math.min(Math.floor(energy/100*5+1), 6), 1);

    var image = require("../Templates/image.js")({
        "name": "measurement_energy_"+step+".png",
        "width": 100,
        "height": 80
    });
    image.margin = {
        "top": 9
    };

    var tag = require("../Templates/tag_small.js")({
        "text": "Recover"
    })
    
    var title = {
        "type": "text",
        "text": "Energy",
        "style": "text_default_center"
    };

    var result = {
        "type": "vbox",
        "items": [image, tag, title]
    };

    return result;
}