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
                items: [

                ]
            },
            vr, {
                type: "vbox",
                weight: 1
            }
        ]
    });

    items.push(hr);

    var image = require("../Templates/image.js")({
        "name": "ic_heart.png",
        "width": 65,
        "height": 65
    });
    image.weight = 1;

    items.push({
        type: "hbox",
        margin: {},
        items: [{
                type: "spacer",
                weight: 1
            },
            image,
            image,
            image,
            image, {
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
    
    if (performance<=2) {
        color = red;
    } else if (performance==3) {
        color = yellow;
    } else {
        color = green;
    }
    
    
    return {
        "margin": {
            "top": 14
        },
        "type": "circle_progress",
        "progress": performance,
        "total": 5,
        "progress_color": color
    };
}

function moodIndicator(mood) {
    
    var image =
    require("../Templates/image.js")({
            "name": "measurement_state_focused.png",
            "width": 100,
            "height": 80
        });
    return image;
    // return {
        // "margin": {
        //     "top": 4,
        //     "bottom": 4
        // },
        // "type": "vbox",
        // "items": [
            image
        // ]
    // };
}
