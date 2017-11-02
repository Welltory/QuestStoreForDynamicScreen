module.exports = function (params) {
    var items = [];
    items.push(createDayTitle(params));

    params.measurements.forEach(function(element) {
        items.push(require("./measurement.js")(element));
    }, this);

    return items;
}

function createDayTitle(params){
    return require("../Templates/group_title.js")({
        name: "fullscreen_status_history.png",
        text: params.date
    })
}