var reply = function (event, replyMsg) {
    event.reply(replyMsg).then(function (data) {
        console.log(replyMsg)
    }).catch(function (error) {
        console.error(error)
    });
}

module.exports = {
    reply
}