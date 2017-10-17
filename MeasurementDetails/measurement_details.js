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
            "margin": {
                "top": 27
            },
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
        require("./details_card.js")(
            {
                titleText: "Systolic pressure",
                descriptionText: "mm Hg, Норма: 55-80 уд.мин.",
                value: "115",
                valuePercent: "-3%",
                valueBgColor: "#29DB7B"
            }
        ),
        require("./details_card.js")(
            {
                titleText: "Diastolic pressure",
                descriptionText: "mm Hg, Норма: 55-80 уд.мин.",
                value: "94",
                valuePercent: "+1%",
                valueBgColor: "#29DB7B"
            }
        ),
        require("./details_card.js")(
            {
                titleText: "SDNN",
                descriptionText: "Показатель вариабельности ритма сердца. Норма: 27,8-61,4 мс.",
                value: "992",
                valuePercent: "-3%",
                valueBgColor: "#29DB7B"
            }
        ),
        require("./details_group_title.js")({imageUrl:"https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/ic_nervous.png?raw=true", text:"Nervous system (2/4)"}),
        require("./details_card.js")(
            {
                titleText: "HF",
                descriptionText: "Показатель вариабельности ритма сердца. Норма: 27,8-61,4 мс.",
                value: "992",
                valuePercent: "-3%",
                valueBgColor: "#FD666F"
            }
        ),
        require("./details_card.js")(
            {
                titleText: "HF",
                descriptionText: "Активность высших центров регуляции. Норма: 300-1200 мс² с долей 5,0-30,9%",
                value: "342",
                valuePercent: "-13%",
                valueBgColor: "#FFF46E",
                blackFont: true
            }
        ),
        require("./details_group_title.js")({imageUrl:"https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/ic_sleep.png?raw=true", text:"Sleep quality (2/4)"}),
        require("./details_card_locked.js")(
            {
                titleText: "rMSSD",
                descriptionText: "Take measurement with cardio to unlock the parameter",
                buttonText: "Take measurement",
                buttonAction: {
                        "type": "redirect",
                        "url": "welltory://branch/Measurement/Start"
                }
            }
        ),
        require("./details_group_title.js")({imageUrl:"https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/ic_conclusion.png?raw=true", text:"Conclusion"}),
        {
            "type": "cell",
            "items": [
                {
                    "type": "text",
                    "style": "text_default",
                    "text": "Мы обнаружили, что 6 / 19 проанализированных параметров хуже, чем должны быть. "+                    
                    "В целом, ваше состояние можно охарактеризовать как напряжение. "+
                    "Для адаптации к влиянию факторов окружающей среды организм тратит больше энергии, чем нужно. Если вы стабильно наблюдаете показатели от 4 и выше — у вас присутствует повышенный риск сердечно-сосудистых заболеваний. "+
                    "Для того, чтобы улучшить свое самочувствие, научиться управлять стрессом, полноценно отдыхать, подобрать оптимальный режим дня обратитесь к персональному аналитику Welltory. "+
                    "Мы обязательно вам поможем :-)",
                    "margin": {
                        "left": 24,
                        "right": 24,
                        "top": 24,
                        "bottom": 24
                    }
                }
            ]
        },
        require("./details_group_title.js")({imageUrl:"https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/ic_links.png?raw=true", text:"Links"}),
        require("./details_link.js")({title: "Buy new gadget"}),
        require("./details_link.js")({title: "Buy new gadget"}),
        require("./details_link.js")({title: "Buy new gadget"})
    ]
}