module.exports = function (params) {

    var hr = require("../Templates/hr.js")();
    var vr = require("../Templates/vr.js")();

    var title = params.time;

    params.tags.forEach(function (tag) {
        title += ", " + tag;
    });

    var header = {
        "type": "hbox",
        "items": [require("../Templates/image.js")({
            "name": "ic_heart.png",
            "width": 32,
            "height": 32
        }), {
            "type": "text",
            "text": title,
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
        "items": [{
            "type": "text",
            "style": "text_card_title",
            "text": "Recommendation",
            "weight": 1
        },
        require("../Templates/image.js")({
            "name": "ic_conclusion_orange.png",
            "width": 32,
            "height": 32
        })
        ],
        margin: {
            top: 16,
            left: 26,
            right: 26
        }
    });

    items.push({
        "type": "text",
        "style": "text_card_description",
        "text": params.recomendation,
        margin: {
            top: 12,
            bottom: 16,
            left: 26,
            right: 26
        }
    });

    items.push(hr);

    items.push({
        "type": "hbox",
        "height": 160,
        "items": [{
            type: "vbox",
            weight: 1,
            items: [performanceIndicator(params)]
        },
            vr, {
            "type": "vbox",
            weight: 1,
            items: [moodIndicator(params.mood, params.feel)]
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
    }, {
            "action": {
                "type": "redirect",
                "url": "welltory://modal/AddPressure/1",
                "on_close": {
                    "type": "refresh"
                }
            }
        }),
    require("../Templates/image.js")({
        "name": "measurement_button_details.png",
        "width": 65,
        "height": 65
    }, {
            "action": {
                "type": "redirect",
                "url": "welltory://modal/FeelDifferent/1",
                "on_close": {
                    "type": "refresh"
                }
            }
        }),
    require("../Templates/image.js")({
        "name": "measurement_button_remove.png",
        "width": 65,
        "height": 65
    }, {
            "action": {
                "type": "redirect",
                "url": "welltory://modal/RemoveMeasurement/1",
                "on_close": {
                    "type": "refresh"
                }
            }
        }),
    require("../Templates/image.js")({
        "name": "measurement_button_share.png",
        "width": 65,
        "height": 65
    }, {
            "action": {
                "type": "redirect",
                "url": "welltory://modal/ShareMeasurement/1",
                "on_close": {
                    "type": "refresh"
                }
            }
        })
    ];

    buttons.forEach(function (item, index, array) {
        item.margin = {
            "top": 8,
            "bottom": 8,
        }
    });
    items.push({
        "type": "hbox",
        "action": {
            "type": "redirect",
            "url": "welltory://modal/Details/1",
            "on_close": {
                "type": "refresh"
            }
        },
        "items": [{
            "type": "text",
            "text": "Параметры замера",
            "style": "text_card_title",
            "margin": {
                "top": 17,
                "bottom": 17,
                "left": 27
            }
        }, {
            "type": "spacer",
            "weight": 1
        }, require("../Templates/image.js")({
                                "name": "icon_cell_chevron_right.png",
                                "width": 13,
                                "height": 22
                            },{
                                margin: {
                                    right: 20
                                }
                            })]
    });
    items.push(hr);
    items.push({
        type: "hbox",
        margin: {},
        items: [{
            type: "spacer",
            weight: 1
        },
        buttons[0], {
            type: "spacer",
            weight: 1
        },
        buttons[1], {
            type: "spacer",
            weight: 1
        },
        buttons[2], {
            type: "spacer",
            weight: 1
        },
        buttons[3], {
            type: "spacer",
            weight: 1
        },
        ],
        margin: {
            "top": 16
        }
    });

    return {
        "type": "cell",
        "items": items
    };
}

function performanceIndicator(measurement) {

    if (measurement.hasOwnProperty("performance_minimum_not_reached")) {
        var step = measurement.performance_minimum_not_reached[0];
        var toGo = measurement.performance_minimum_not_reached[1];

        var left = toGo - step;

        return {
            "type": "vbox",
            "items": [
                {
                    "type": "vbox",
                    "height": 120,
                    "items": [
                        {
                            "type": "hbox",
                            "items": [{
                                "type": "spacer",
                                "weight": 1
                            },
                            require("../Templates/image.js")({
                                "name": "fullscreen_image_lock.png",
                                "width": 32,
                                "height": 32
                            }), {
                                "type": "text",
                                "style": "text_card_lock_counter",
                                "text": step + "/" + toGo,
                                "height": 32,
                                "margin": {
                                    "left": 15
                                }
                            }, {
                                "type": "spacer",
                                "weight": 1
                            }
                            ],
                            "margin": {
                                "top": 15
                            }
                        }, {
                            "type": "progress",
                            "progress_color": "#FD666F",
                            "show_percentage": false,
                            "margin": {
                                "top": 12
                            },
                            "value": step / toGo
                        }, {
                            "type": "text",
                            "style": "text_card_desc_label",
                            "weight": 1,
                            "text": left > 1 ? "1 measurement left" : left + " measurements left"
                        }
                    ]
                }, {
                    "type": "text",
                    "text": "Performance",
                    "style": "text_card_label_text",
                    "margin": {
                        "top": 8
                    }
                }],
            margin: {
                left: 20,
                right: 20
            }
        }
    }

    var performance = measurement.performance;

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

    return cell({
        "margin": {
            "top": 14,
            "bottom": 9
        },
        "type": "circle_progress",
        "progress": performance,
        "height": 71,
        "total": 5,
        "progress_color": color,
    }, "Ok", color, "Performance");
}

function moodIndicator(mood, feel) {
    var mood_index = Math.max(Math.min(mood, 5), 1)
    var feel_index = Math.max(Math.min(feel, 5), 1)
    var fileName = mood_index || feel_index ? "meaasurement_indicator_mood_" + mood_index + "_" + feel_index + ".png" : "meaasurement_indicator_mood_error.png";

    return cell(require("../Templates/image.js")({
        "name": fileName,
        "width": 91,
        "height": 91
    }), "Good / Super", "#F0F1F4", "Feel / Mood");
}

function stressIndicator(stress) {
    step = Math.max(Math.min(Math.floor(stress / 100 * 3 + 1), 3), 1);
    return cell(require("../Templates/image.js")({
        "name": "measurement_stress_" + step + ".png",
        "width": 100,
        "height": 80
    }), "Optimum", null, "Stress");
}

function energyIndicator(energy) {
    step = Math.max(Math.min(Math.floor(energy / 100 * 5 + 1), 6), 1);
    return cell(require("../Templates/image.js")({
        "name": "measurement_energy_" + step + ".png",
        "width": 100,
        "height": 80
    }), "Recover", null, "Energy");
}

function cell(icon, tag_text, color, title) {
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
        "items": [
            {
                "type": "vbox",
                "height": 120,
                "items": [
                    {
                        "type": "hbox",
                        "items": [
                            {
                                type: "spacer",
                                weight: 1
                            },
                            icon,
                            {
                                type: "spacer",
                                weight: 1
                            }
                        ]
                    },
                    {
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
