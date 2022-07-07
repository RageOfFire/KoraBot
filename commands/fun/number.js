module.exports = {
    name: "number",
    category: "fun",
    description: 'Đưa ra 1 số ngẫu nhiên từ 1-100',
    permissions: [],
    devOnly: false,
    run: async({ client, message, prefix, args }) => {
        if (message.content == prefix + 'number ' || message.content == prefix + 'number' || isNaN(message.content.replace(prefix + 'number ', ''))) {
            message.reply('Bạn cần nhập số')
        }
        else {
            message.reply(`Con số ngẫu nhiên của bạn là ${Math.floor(Math.random() * message.content.replace(prefix + 'number ', '')) + 1}`).catch((err) => {console.log(err)});
        }
    }
}