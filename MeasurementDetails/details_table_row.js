module.exports = function(params){
    return {
        "type": "hbox",
        "items": [
            {
                "type": "hbox",
                "items": [
                    {
                        "type": "spacer",
                        "width": 1,
                        "component_style": {
                            "background_color": "#F0F1F4"
                        }
                    },
                    require("./details_table_cell.js")({
                        "weight": 175,
                        "cellTitle": "Parameter",
                        "cellValue": params.parameter
                    }),
                    {
                        "type": "spacer",
                        "width": 1,
                        "component_style": {
                            "background_color": "#F0F1F4"
                        }
                    },
                    require("./details_table_cell.js")({
                        "weight": 88,
                        "cellTitle": "Units",
                        "cellValue": params.units,
                        "center": true
                    }),
                    {
                        "type": "spacer",
                        "width": 1,
                        "component_style": {
                            "background_color": "#F0F1F4"
                        }
                    },
                    require("./details_table_cell.js")({
                        "cellTitle": "Value",
                        "weight": 88,
                        "center": true,
                        "cellValue": params.value
                    }),
                    {
                        "type": "spacer",
                        "width": 1,
                        "component_style": {
                            "background_color": "#F0F1F4"
                        }
                    },
                ]
            }
        ]
    };
}
