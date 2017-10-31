module.exports = function(params) {
    return {
        "type": "text",
        "style": "text_value_bold_white",
        "text": params.text,
        "margin": {
            "top": 2,
            "left": 7,
            "bottom": 2,
            "right": 7
        },
        "component_style": {
            "background_color": params.color||"#29DB7B",
            "corner_radius": 3
        }
    }
};
