module.exports =
{
    "title": "Act",
    "content": [
        {
            "type": "spacer",
            "height": 25
        },
        {
            "type": "carousel",
            "title": "HEALTH (ru)",
            "icon": require("./image_category.js"),
            "items": [
                require("./quest_preview_comingsoon.js"),
                require("./quest_preview_available.js"),
                require("./quest_preview_complete.js"),
                require("./quest_preview_inprogress.js"),
                require("./quest_preview_paused.js")
                // {
                //     "background": "",
                //     "items": [
                //         {
                //             "value": 0.0,
                //             "type": "progress"
                //         }
                //     ],
                //     "title": "OnboardingPaid (no user) (active)",
                //     "action": {
                //         "type": "redirect",
                //         "url": "welltory://branch/Tasks"
                //     }
                // },
                // {
                //     "background": "",
                //     "title": "OnboardingFree (no user) (default)",
                //     "action": {
                //         "variant": "push",
                //         "type": "open",
                //         "page": {
                //             "footer": [
                //                 {
                //                     "icon": {
                //                         "width": 23,
                //                         "uploadcare_id": "b6508341-35f6-4671-81ba-93bfe7010d19",
                //                         "height": 29,
                //                         "url": "https://ucarecdn.com/b6508341-35f6-4671-81ba-93bfe7010d19/"
                //                     },
                //                     "text": "Start playing",
                //                     "style": "green",
                //                     "type": "button",
                //                     "action": {
                //                         "method": "POST",
                //                         "type": "request",
                //                         "url": "https://stage-api.welltory.com/api/v2/todo/v4/user/data/quests/1/activate/"
                //                     }
                //                 }
                //             ],
                //             "content": [
                //                 {
                //                     "style": "title",
                //                     "text": "OnboardingFree (no user)",
                //                     "type": "text"
                //                 },
                //                 {
                //                     "align": "center",
                //                     "type": "image",
                //                     "url": {
                //                         "width": 136,
                //                         "uploadcare_id": "d96fae25-17bc-4de2-8e35-0d6030c2b55b",
                //                         "height": 38,
                //                         "url": "https://ucarecdn.com/d96fae25-17bc-4de2-8e35-0d6030c2b55b/"
                //                     }
                //                 },
                //                 {
                //                     "style": "header1",
                //                     "text": "About the quest",
                //                     "type": "text"
                //                 },
                //                 {
                //                     "text": "Бла бла бла \r\nЕще одна строчка с бла бла бла",
                //                     "style": "text",
                //                     "type": "text"
                //                 }
                //             ]
                //         }
                //     }
                // }
            ]
        }
    ]
}