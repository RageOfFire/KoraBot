const { EightBall } = require('discord-gamecord')
module.exports = {
    name: "8ball",
    category: "game",
    description: 'Game 8Ball',
    permissions: [],
    devOnly: false,
    run: async function({ client, message, prefix, args }) {
        if (message.content == prefix + this.name + ' ' || message.content == prefix + this.name) {
            message.reply('Bạn cần nhập nội dung')
        }
        else {
            new EightBall({
                message: message,
                question: message.content.replace(prefix + '8ball ', ''),
                slash_command: false,
                embed: {
                    title: '🎱 8Ball',
                    color: '#faa152'
                }
            }).startGame().catch((err) => {console.log(err)});
        }
    }
}