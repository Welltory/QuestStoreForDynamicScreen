module.exports = {
    "type": "cell",
    "items": [{
        "type": "hbox",
        "items": [{
            "style": "text_default",
            "text": "Пройти опрос об уровне физического стресса",
            "type": "text",
            "margin": {
                "left": 18,
                "top": 18,
                "right": 10,
                "bottom": 0
            },
            "weight": 1
        }, {
            "image": {
                "height": 32,
                "url": "https://ucarecdn.com/cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb/",
                "width": 32,
                "uploadcare_id": "cf23f44d-e8f7-4e06-9dd9-d2117fbd13cb"
            },
            "type": "image",
            "margin": {
                "left": 18,
                "top": 18,
                "right": 10,
                "bottom": 0
            }
        }]
    }, {
        "style": "text_default_grey",
        "text": "Видео о влиянии стресса",
        "type": "text",
        "margin": {
            "left": 18,
            "top": 18,
            "right": 18,
            "bottom": 0
        }
    }, {
        "type": "hbox",
        "items": [{
            "style": "button_grey_cell",
            "text": "Close",
            "type": "button",
            "ratio": 50,
            "margin": {
                "left": 18,
                "top": 18,
                "right": 0,
                "bottom": 18
            }
        }, {
            "type": "spacer",
            "wieght": 1
        }]
    }],
    "action": {
        "method": "POST",
        "progress_text": "Активация программы..",
        "success_text": "Программа активирована",
        "url": "https://stage-api.welltory.com/api/v2/todo/v4/user/data/quests/1/unpause/",
        "type": "request"
    }
};
