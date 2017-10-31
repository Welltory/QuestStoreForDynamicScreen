module.exports = function(data) {
    var content = [];

    content.push(require("../Templates/group_title.js")({
        name: "ic_diamond.png",
        text: "Today measurements"
    }));

    data.measurements.forEach(function(measuerment) {
        content.push(require("./measurement.js")(measuerment));
    });

    content.push(require("../Templates/group_title.js")({
        name: "ic_chart.png",
        text: "Data summary"
    }));

    content.push({
        "type": "cell",
        "items": [{
            "type": "hbox",
            "items": [{
                    "type": "text",
                    "text": "Rate your day",
                    "weight": 1
                }, {
                    "type": "image",
                    "image": require("../Templates/image.js")({
                        "name": "star_20_1.png",
                        "width": 32,
                        "height": 32
                    })
                }
            ],
            "margin": {
                top: 20,
                left: 24,
                right: 24                
            }
        }, {
            "type": "text",
            "text": "Please, rate your day as you feel and then you can competite it with Welltory score",
            "margin": {
                left: 24,
                right: 24,
                top: 10
            }
        }, {
            "type": "hbox",
            "items": [],
            "margin": {
                "top": 16,
                "bottom": 25
            }
        }]
    });

    return {
        "content": content
    };
}
