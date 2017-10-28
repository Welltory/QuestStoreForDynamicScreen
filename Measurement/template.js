module.exports = function(data) {
    var content = [];

    content.push(require("../Templates/group_title.js")({
        name: "ic_heart.png",
        text: "Today measurements"
    }));

    data.measurements.forEach(function(measuerment) {
        content.push(require("./measurement.js")(measuerment));
    });
    
    return {
        "content": content
    };
}
