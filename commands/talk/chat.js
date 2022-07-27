const chat = require('../../util/api');
module.exports = {
    name: "chat",
    category: "talk",
    description: 'Trò chuyện với Kora',
    permissions: [],
    devOnly: false,
    run: async function({ client, message, prefix, args }) {
        let chatMess = message.content.replace(prefix + this.name + ' ', '');
        const response = await chat.GetItems(message.author.id, chatMess, message.author.username, client.user.username, chatMess);
        if (message.content == prefix + this.name + ' ' || message.content == prefix + this.name) {
            message.reply('Bạn cần nhập nội dung')
        }
        else {
            message.reply(response.data).catch((err) => {console.log(err)});
        }
    }
}