module.exports = require("./onboarding_page.js")({
    title: "Wellness Academy",
    image: "https://github.com/lazarev/QuestStoreForDynamicScreen/blob/master/images/onb_academy_1.png?raw=true",
    description: "Check out our lectures to learn more about your body & brain. Knowledge is power.",
    buttonText: "What is a lecture?",
    buttonAction: {
        "type": "redirect",
        "url": "welltory://branch/Payment"
    }
})