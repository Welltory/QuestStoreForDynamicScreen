module.exports = function(params){
    return {            
        "type": "vbox",
        "margin": {
            "top": 6,
            "bottom": 14,
            "left": 16,
            "right": 16
        },
        "weight": params.weight,
        "items": [
            {
                "type": "text",
                "style": params.center?"text_table_title_center":"text_table_title",
                "text": params.cellTitle
            },
            {
                "type": "text",
                "style": params.center?"text_table_value_center":"text_table_value",
                "text": params.cellValue
            }
        ]
    };
}
