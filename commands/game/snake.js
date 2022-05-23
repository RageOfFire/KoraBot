const { Snake } = require('discord-gamecord')
module.exports = {
    name: "snake",
    category: "game",
    description: 'game rắn',
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        new Snake({
            message: message,
            slash_command: false,
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
          }).startGame();
    }
}