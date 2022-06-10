const { TwoZeroFourEight } = require('discord-gamecord')

const run = async(client, interaction) => {
  new TwoZeroFourEight({
    message: interaction,
    slash_command: true,
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

module.exports = {
    name: "2048",
    category: "game",
    description: 'Game 2048',
    permissions: [],
    devOnly: false, run
}