module.exports = {
    name: "howgay",
    category: "fun",
    description: 'Xem độ gay của bạn :))) ?',
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        message.reply(`Bạn có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ gay`)
    }
}