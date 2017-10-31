module.exports = function(params) {
    return {
        "type": "image",
        "image": {
            "url": params.url||"https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/"+params.name+"?raw=true",
            "width": params.width||30,
            "height": params.height||30
        }
    }
}
