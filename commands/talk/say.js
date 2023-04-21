module.exports = {
    name: "say",
    category: "talk",
    description: 'Yêu cầu bot nói gì đó',
    permissions: [],
    devOnly: false,
    run: async function({ client, message, prefix, args }) {
        let messages = message.content.replace(prefix + 'say ', '')
        if (message.content == prefix + this.name || message.content == prefix + this.name) {
            message.reply('Bạn cần nội dung để tôi nói chứ?').catch((err) => {console.log(err)});
        }
        else {
            message.reply(messages).catch((err) => {console.log(err)});
        }
    }
}