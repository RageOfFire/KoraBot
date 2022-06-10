const { TwoZeroFourEight } = require('discord-gamecord')
module.exports = {
    name: "2048",
    category: "game",
    description: 'Game 2048',
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        new TwoZeroFourEight({
            message: message,
            slash_command: false,
            embed: {
              title: '2048',
              color: '#faa152',
              overTitle: 'Trò chơi kết thúc!',
              winTitle: 'Bạn đã thắng!',
            },
            emojis: {
              up: '⬆️', 
              right: '➡️',
              down: '⬇️',
              left: '⬅️',
            },
            othersMessage: 'false'
        }).startGame().catch((err) => {console.log(err)});
    }
}