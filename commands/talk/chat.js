const { GetItems } = require('../../util/apiv2');
// un-comment to use old api
// const chat = require("../../util/api");
module.exports = {
    name: "chat",
    category: "talk",
    description: 'Trò chuyện với Bot',
    permissions: [],
    devOnly: false,
    run: async function({ client, message, prefix, args }) {
        // Old public API
        // const response = await chat.GetItems(message.author.id, chatMess, message.author.username, client.user.username, chatMess);
        let chatMess = message.content.replace(prefix + this.name + ' ', '');
        if (message.content == prefix + this.name + ' ' || message.content == prefix + this.name) {
            message.channel.send('Bạn cần nhập nội dung')
        }
        // else {
        //     message.reply(response.data).catch((err) => {console.log(err)});
        // }
        else {
            GetItems(chatMess)
            .then(outputText => {
                message.channel.send(`${outputText}`);
            })
            .catch(error => {
                console.error(error);
                message.reply('Error something went wrong :(((.');
            });
        }
    }
}