const chat = require('../../util/api');
const { Points } = require('../../events/Points')
module.exports = {
    name: "chat",
    category: "talk",
    description: 'Trò chuyện với Kora',
    permissions: [],
    devOnly: false,
    run: async function({ client, message, prefix, args }) {
        let chatMess = message.content.replace(prefix + this.name + ' ', '');
        const response = await chat.GetItems(message.author.id, chatMess, message.author.username, client.user.username, chatMess);
        const pointDB = await Points.findOne({ where: { 'nameid': message.author.id } });
        if (message.content == prefix + this.name + ' ' || message.content == prefix + this.name) {
            message.reply('Bạn cần nhập nội dung')
        }
        else {
            if (pointDB != null) {
                await Points.increment('points', { by: 1, where: { 'nameid': message.author.id } });
            }
            else {
                await Points.create({
                    nameid: message.author.id,
                    name: message.author.tag,
                    points: 1
                });
            }
                message.reply(response.data).catch((err) => {console.log(err)});
            }
        }
    }