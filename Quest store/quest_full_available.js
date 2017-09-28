module.exports = {
    "footer": [{
        "icon": {
            "width": 23,
            "uploadcare_id": "b6508341-35f6-4671-81ba-93bfe7010d19",
            "height": 29,
            "url": "https://ucarecdn.com/b6508341-35f6-4671-81ba-93bfe7010d19/"
        },
        "text": "Start playing",
        "style": "button_green",
        "margin": {
            "left": 10,
            "right": 10,
            "bottom": 10,
            "top": 10
        },
        "type": "button",
        "action": {
            "method": "POST",
            "type": "request",
            "url": "https://stage-api.welltory.com/api/v2/todo/v4/user/data/quests/1/activate/"
        }
    }],
    "content": [{
        "style": "text_title",
        "text": "OnboardingFree (no user)",
        "type": "text",
        "margin": {
            "top": 7,
            "left": 38,
            "right": 38,
            "bottom":0
        }
    }, 
    {
        "type": "spacer",
        "height": 20
    },
    {
        "type": "image",
        "image": {
            "height": 258,
            "url": "https://www.wired.com/wp-content/uploads/images_blogs/design/2013/09/tumblr_inline_mjx5ioXh8l1qz4rgp.gif",
            "width": 141
        }
    },
    {
        "type": "spacer",
        "height": 20
    },
    {
        "style": "text_header1",
        "text": "About the quest",
        "type": "text",
        "margin": {
            "left": 36,
            "right": 36,
            "top": 0,
            "bottom": 0
        }
    }, {
        "text": "Бла бла бла \r\nЕще одна строчка с бла бла бла",
        "style": "text_default",
        "type": "text",
        "margin": {
            "left": 36,
            "right": 36,
            "top": 0,
            "bottom": 0
        }
    }]
}
