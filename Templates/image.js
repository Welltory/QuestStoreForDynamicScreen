module.exports = function(params, extend) {
    var result = {
        "type": "image",
        "image": {
            "url": params.url||"https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/"+params.name+"?raw=true",
            "width": params.width||30,
            "height": params.height||30
        }
    }
    
    if (extend) {
        for (var key in extend) {
            result[key] = extend[key];
        }
    }
    
    return result;
}
