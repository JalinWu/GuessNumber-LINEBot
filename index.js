const result = require('dotenv').config();
if (result.error) throw result.error
const linebot = require('linebot');
const Express = require('express');

const { reply } = require('./resource/func');

// Line Channel info
const bot = linebot({
    channelId: process.env.LINE_CHANNEL_ID,
    channelSecret: process.env.LIEN_CHANNEL_SECRET,
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

const linebotParser = bot.parser();
const app = Express();

// for line webhook usage
app.post('/webhook', linebotParser);

let PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
});

let answer = 0;
let lowNum = 1; 
let highNum = 100; 
let count = 0;

bot.on('message', function (event) {
    var userMsg = event.message.text;

    if (userMsg == 'start' || userMsg == 'restart') {
        answer = Math.floor(Math.random() * 100) + 1; // 1~100
        count = 0;
        console.log(answer);
        
        reply(event, '開始吧！');
    } else {
        count++;
        if (userMsg > answer) {
            highNum = userMsg;
            reply(event, lowNum + ' ~ ' + highNum);

        } else if (userMsg < answer) {
            lowNum = userMsg;
            reply(event, lowNum + ' ~ ' + highNum);

        } else {
            reply(event, '恭喜答對！一共猜了' + count + '次');

        }
    }
});