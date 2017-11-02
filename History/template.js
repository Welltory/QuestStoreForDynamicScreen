module.exports = function(data) {
    var content = [];
    data.days.forEach(function(element) {
        content.push.apply(content, require("./day.js")(element));
    }, this);
    return {
        "content": content
    };
}
