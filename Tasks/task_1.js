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
        "style": "text_default",
        "text": "25 вопросов",
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
            "style": "button_orange_cell",
            "text": "Начать",
            "type": "button",
            "ratio": 50,
            "icon": {
                "height": 14,
                "url": "https://ucarecdn.com/b6508341-35f6-4671-81ba-93bfe7010d19/",
                "width": 14,
                "uploadcare_id": "b6508341-35f6-4671-81ba-93bfe7010d19"
            },
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
        "web_view_url": "https://www.yandex.ru/",
        "type": "open",
        "variant": "push",
        "on_close": {
            "type": "refresh"
        }
    }
};