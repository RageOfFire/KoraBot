module.exports = {
    name: "number",
    category: "fun",
    description: 'Đưa ra 1 số ngẫu nhiên từ 1-100',
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        message.reply(`Con số ngẫu nhiên của bạn là ${Math.floor(Math.random() * 100) + 1}`)
    }
}