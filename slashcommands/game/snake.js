const { Snake } = require('discord-gamecord')

const run = async({ client, interaction, prefix }) => {
  new Snake({
      message: interaction,
      slash_command: true,
      embed: {
        title: 'Rắn',
        color: '#faa152',
        overTitle: 'Trò chơi kết thúc',
      },
      snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
      emojis: {
        board: '⬛', 
        food: '🍎',
        up: '⬆️', 
        right: '➡️',
        down: '⬇️',
        left: '⬅️',
      },
      foods: ['🍎', '🍇', '🍊'],
      stopButton: 'Dừng',
      othersMessage: 'Bạn không có quyền sử dụng nút này!',
    }).startGame().catch((err) => {console.log(err)});
}

module.exports = {
    name: "snake",
    category: "game",
    description: 'game rắn',
    permissions: [],
    devOnly: false, run
}