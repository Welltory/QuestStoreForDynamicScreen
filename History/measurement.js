module.exports = function (params) {
    var items = [];
    items.push(createTitle(params));
    items.push(createHorizontalDivider());
    if (params.readiness !== undefined || params.feel !== undefined || params.accuracy !== undefined) {
        items.push(createFirstRow(params));
        items.push(createHorizontalDivider());
        items.push(createSecondRow(params));
    } else {
        items.push(createSingleRow(params));
    }
    if(params.tags){
        items.push(createHorizontalDivider());
        items.push(createTags(params));
    }
    return {
        "type": "cell",
        "items": items
    };
}

function createTags(params){
    var tags = params.tags.join(",");
    return {
        type: "hbox",
        margin: {
            top: 8,
            bottom: 14,
            left: 22,
            right: 22
        },
        items: [
            {
                type: "text",
                text: "Tags: ",
                style: "text_default_bold"
            },
            {
                type: "text",
                text: tags
            }
        ]
    }
}

function createFirstRow(params) {
    return {
        type: "hbox",
        items: [
            createCell("Readiness", params.readiness + "/" + params.readiness_max),
            createVerticalDivider(),
            createCell("Fell / Mood", params.feel + "/" + params.mood),
            createVerticalDivider(),
            createCell("Energy", params.energy + "%"),
            createVerticalDivider(),
            createCell("Stress", params.stress + "%"),
        ]
    }
}

function createSecondRow(params) {
    return {
        type: "hbox",
        items: [
            createCell("Heart rate", params.heart_rate),
            createVerticalDivider(),
            createCell("Details", params.details + "/" + params.details_max),
            createVerticalDivider(),
            createCell("BP", params.pressure_systolic + "/" + params.pressure_diastolic),
            createVerticalDivider(),
            createCell("Accuracy", params.accuracy + "%"),
        ]
    }
}

function createSingleRow(params) {
    return {
        type: "hbox",
        items: [
            createCell("Energy", params.energy + "%"),
            createVerticalDivider(),
            createCell("Stress", params.stress + "%"),
            createVerticalDivider(),
            createCell("Heart rate", params.heart_rate),
            createVerticalDivider(),
            createCell("BP", params.pressure_systolic?(params.pressure_systolic + "/" + params.pressure_diastolic):"-"),
        ]
    }
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

function createCell(title, value) {
    return {
        type: "vbox",
        weight: 1,
        margin: {
            top: 6,
            bottom: 6
        },
        items: [
            {
                "type": "text",
                "style": "text_table_title_center",
                "text": title
            },
            {
                margin: {
                    top: 4
                },
                "type": "text",
                "style": "text_table_value_center",
                "text": value ? value : "-"
            }
        ]
    }
}

function createTitle(params) {
    var items = [
        require("../Templates/image.js")({
            name: "ic_heart.png",
            width: 16,
            height: 16
        }),
        {
            type: "text",
            text: params.time,
            style: "text_title_cell",
            weight: 1,
            margin: {
                left: 12,
                right: 12
            }
        }
    ];
    var label = createLabel(params);
    if (label) {
        items.push(label);
    }
    return {
        type: "hbox",
        margin: {
            left: 14,
            right: 14,
            top: 14,
            bottom: 10
        },
        items: items
    }
}

function createLabel(params) {
    if (!params.label) {
        return undefined;
    }
    var color;
    var style;
    switch (params.label.type) {
        case "positive":
            color = "#29DB7B";
            style = "text_tag_white";
            break;
        case "negative":
            color = "#FD666F";
            style = "text_tag_white";
            break;
        default:
            color = "#F0F1F4";
            style = "text_tag_black";
            break;
    }
    if (params.label)
        return {
            type: "hbox",
            component_style: {
                corner_radius: 100,
                background_color: color
            },
            items: [
                {
                    margin: {
                        left: 10,
                        right: 10,
                        top: 2,
                        bottom: 2
                    },
                    type: "text",
                    text: params.label.text,
                    style: style
                }
            ]
        }
}