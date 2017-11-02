module.exports = function(params){
    return {
        "type": "hbox",
        "margin": {
            "top": 32,
            "left": 25,
            "right": 25,
            "bottom": 18
        },
        "items": [
            require("./image.js")({"name": params.name, "width": 24, "height": 24}),
            {
                "type": "text",
                "text": params.text,
                "style": "text_header__value",
                "margin": {
                    "left": 8
                }
            }
        ]
    };
}
