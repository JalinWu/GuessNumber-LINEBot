let answer = 0;
let lowNum = 1;
let highNum = 100;
let count = 0;

var repeatBird = function (bot) {
    // bot.on('message', function (event) {
    //     var userMsg = event.mssage.text;
    //     event.reply(userMsg);
    // });
} 

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
    guessNumber
}