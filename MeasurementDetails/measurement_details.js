module.exports =
{
    "title": "Measurement Details",
    "content": [
        {
            "margin": {
                "top": 32
            },
            "type": "text",
            "style": "text_title_fullscreen_header1",
            "text": "HRV Details"
        },
        {
            "type":"hbox",
            "items": [
                {
                    "type": "spacer",
                    "weight": 1
                },
                {
                    "margin":{
                        "top": 14
                    },
                    "type": "circle_progress",
                    "progress": 5,
                    "total": 19,
                    "progress_color": "#FD666F"
                },
                {
                    "type": "spacer",
                    "weight": 1
                }
            ]
        },        
        {
            "type": "cell",
            "items": [
                {
                    "type": "text",
                    "style": "text_title_cell",
                    "text": "What is it?",
                    "margin": {
                        "left": 20,
                        "right": 20,
                        "top": 24
                    }
                },
                {
                    "type": "text",
                    "style": "text_default",
                    "margin": {
                        "left": 20,
                        "right": 20,
                        "top": 8,
                        "bottom": 24
                    },
                    "text": "Public science"
                }
            ]
        },
        require("./details_group_title.js")({imageUrl:"https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/ic_heart.png?raw=true", text:"Your heart (4/4)"}),
        require("./details_card.js")(
            {
                titleText: "Pulse",
                descriptionText: "Показатель изменения вашего пульса. Норма: 55-80 уд.мин.",
                value: "1.29",
                valuePercent: "-3%",
                valueBgColor: "#29DB7B"
            }
        ),
    ]
}