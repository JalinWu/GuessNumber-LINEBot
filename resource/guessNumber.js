let answer = 0;
let lowNum = 1;
let highNum = 100;
let count = 0;

// 學舌鳥
var repeatBird = function (bot) {
    // bot.on('message', function (event) {
    //     var userMsg = event.message.text;
    //     event.reply(userMsg);
    // });
}

// 各種通知
var webhookEvent = function (bot) {
    // 被加入好友
    bot.on('follow', async (event) => {
        event.reply('感謝將我加為好友');
    })

    // 被解除好友
    bot.on('unfollow', async (event) => {
        console.log('被解除好友了 QQ');
    })

    // 被加入群組/聊天室
    bot.on('join', async (event) => {
        event.reply('感謝將我加入群組');
    })

    // 被踢出群組/聊天室
    bot.on('leave', async (event) => {
        console.log('被踢出群組了 QQ');
    })

    // 有人加入群組/聊天室
    bot.on('memberJoined', async (event) => {
        event.reply('歡迎加入群組 ^^');
    })

    // 有人離開群組/聊天室
    bot.on('memberLeft', async (event) => {
        console.log('有人離開群組了 QQ');
    })
}

// 猜數字
var guessNumber = function (bot) {
    bot.on('message', function (event) {
        var userMsg = event.message.text;

        if (userMsg == 'start' || userMsg == 'restart') {
            answer = Math.floor(Math.random() * 100) + 1; // 1~100
            count = 0;
            console.log(answer);

            event.reply('開始吧！');
        } else {
            count++;
            if (userMsg > answer) {
                highNum = userMsg;
                event.reply(lowNum + ' ~ ' + highNum);

            } else if (userMsg < answer) {
                lowNum = userMsg;
                event.reply(lowNum + ' ~ ' + highNum);

            } else if (userMsg == answer) {
                event.reply([
                    { type: 'text', text: '恭喜答對！一共猜了' + count + '次' },
                    {
                        type: 'sticker',
                        packageId: '11537',
                        stickerId: '52002735'
                    }
                ]);

            } else {
                event.reply('Oops, 我聽不懂你在說什麼...')
            }
        }
    });
}

module.exports = {
    repeatBird,
    webhookEvent,
    guessNumber
}