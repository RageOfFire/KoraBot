const { TicTacToe } = require('discord-gamecord')
module.exports = {
    name: "ttt",
    category: "game",
    description: 'Game Tic Tac Toe yêu cầu phải có người chơi cùng',
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        const user = message.mentions.users.first();
        if(!user) {
            message.reply('Không thể bắt đầu trò chơi khi không có đối thủ hãy ping 1 ai đó để rủ họ');
        }
        else {
          new TicTacToe({
            message: message,
            slash_command: false,
            opponent: user,
            embed: {
              title: 'Tic Tac Toe',
              overTitle: 'Trò chơi kết thúc',
              color: '#faa152',
            },
            oEmoji: '🔵',
            xEmoji: '❌',
            blankEmoji: '➖',
            oColor: 'PRIMARY',
            xColor: 'DANGER',
            waitMessage: 'Đang chờ người chơi...',
            turnMessage: '{emoji} | Đến lượt người chơi **{player}** !',
            askMessage: 'Ê {opponent}, {challenger} đang gạ solo Tic Tac Toe nè!',
            cancelMessage: 'Có vẻ người chơi từ chối chơi Tic Tac Toe. \:(',
            timeEndMessage: 'Người chơi không trả lời! Sập game.',
            drawMessage: 'Hòa!',
            winMessage: '{emoji} | **{winner}** đã chiến thắng!',
            gameEndMessage: 'Game kết thúc và có cát nịt :(',
          }).startGame();
        }
    }
}