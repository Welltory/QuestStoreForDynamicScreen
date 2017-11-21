module.exports = function (params) {
    var items = [];

    items.push(createPersonRow(params));
    items.push(createHorizontalDivider());
    items.push(createEnergyStressRow(params));
    return {
        "type": "cell",
        "items": items
    };
}

function createHorizontalDivider() {
    return {
        type: "spacer",
        height: 1,
        component_style: {
            background_color: "#F0F1F4"
        }
    }
}

function createVerticalDivider() {
    return {
        type: "spacer",
        width: 1,
        component_style: {
            background_color: "#F0F1F4"
        }
    }
}

function createEnergyStressRow(params) {
    return {
        type: "hbox",
        weight: 1,
        items: [
            require("../Templates/cell.js")({
                icon: require("../Templates/image.js")({
                    "name": "measurement_energy_1.png",
                    "width": 91,
                    "height": 91
                }), tag_text: "Recover", color: "#33E686", title: "Energy"
            },{weight:1}),
            createVerticalDivider(),
            require("../Templates/cell.js")({
                icon: require("../Templates/image.js")({
                    "name": "measurement_stress_2.png",
                    "width": 91,
                    "height": 91
                }), tag_text: "Low", color: "#33E686", title: "Stress"
            },{weight:1})
        ]
    }
}


function createPersonRow(params) {
    return {
        type: "hbox",
        weight: 1,
        margin: {
            left: 27,
            right: 27,
            top: 31,
            bottom: 31
        },
        items: [
            require("../Templates/image.js")({
                name: params.person.photo,
                width: 64,
                height: 64
            }, {
                    width: 64,
                    height: 64,
                    component_style: {
                        corner_radius: 64
                    }
                }),
            {
                type: "vbox",
                margin: {
                    left: 20,
                    right: 20
                },
                items: [
                    {
                        type: "text",
                        style: "text_group_title",
                        text: "Performance",
                        margin: {
                            bottom: 10
                        }
                    },
                    {
                        "type": "hbox",
                        "items": [
                            {
                                "type": "hbox",
                                "items": [{
                                    "type": "text",
                                    "style": "text_tag_white",
                                    "text": "Super",
                                    "margin": {
                                        "top": 2,
                                        "left": 7,
                                        "bottom": 2,
                                        "right": 7
                                    }
                                }],
                                "component_style": {
                                    "background_color": "#33E686",
                                    "corner_radius": 100
                                }
                            },
                            {
                                "type": "spacer",
                                "weight": 1
                            }
                        ]
                    },

                    {
                        margin: {
                            top: 10
                        },
                        type: "text",
                        style: "text_default",
                        text: "Ready to win the day + 2 строчки текста"
                    }
                ]
            }
        ]
    }
}