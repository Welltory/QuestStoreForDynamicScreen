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
        items: [
            require("../Templates/cell.js")({
                icon: require("../Templates/image.js")({
                    "name": "measurement_energy_1.png",
                    "width": 91,
                    "height": 91
                }), tag_text: "Recover", color: "#33E686", title: "Energy"
            }),
            createVerticalDivider(),
            require("../Templates/cell.js")({
                icon: require("../Templates/image.js")({
                    "name": "measurement_stress_2.png",
                    "width": 91,
                    "height": 91
                }), tag_text: "Low", color: "#33E686", title: "Stress"
            })
        ]
    }
}


function createPersonRow(params) {
    return {
        type: "hbox",
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
                    round: true
                }),
            {
                type: "vbox",
                margin: {
                    left: 20
                },
                items: [
                    {
                        type: "hbox",
                        items: [
                            {
                                type: "text",
                                style: "text_group_title",
                                text: "Performance",
                                margin: {
                                    right: 10
                                }
                            },
                            require("../Templates/tag_small.js")({ color: "#33E686", text: "Super" })
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