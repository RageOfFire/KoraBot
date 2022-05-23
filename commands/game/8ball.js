const { EightBall } = require('discord-gamecord')
module.exports = {
    name: "8ball",
    category: "game",
    description: 'Game 8Ball',
    permissions: [],
    devOnly: false,
    run: async({ client, message, prefix, args }) => {
      new EightBall({
        message: message,
        question: message.content.replace(prefix + '8ball ' ,''),
        slash_command: false,
        embed: {
            title: '🎱 8Ball',
            color: '#faa152'
        }
    }).startGame();
    }
}