const { Connect4 } = require('discord-gamecord')
module.exports = {
    name: "connect4",
    category: "game",
    description: 'Game connect4 yêu cầu phải có người chơi cùng',
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        const user = message.mentions.users.first();
        if(!user) {
            message.reply('Không thể bắt đầu trò chơi khi không có đối thủ hãy ping 1 ai đó để rủ họ');
        }
        else {
            new Connect4({
                message: message,
                slash_command: false,
                opponent: user,
                embed: {
                  title: 'Connect 4',
                  color: '#faa152',
                },
                emojis: {
                  player1: '🔵',
                  player2: '🟡'
                },
                waitMessage: 'Đang chờ người chơi...',
                turnMessage: '{emoji} | Đến lượt người chơi **{player}**.',
                winMessage: '{emoji} | **{winner}** đã chiến thắng!',
                gameEndMessage: 'Game kết thúc và có cát nịt :(',
                drawMessage: 'Hòa!',
                othersMessage: 'Bạn không có quyền sử dụng nút này!',
                askMessage: 'Ê {opponent}, {challenger} đang gạ solo Connect 4 nè!',
                cancelMessage: 'Có vẻ người chơi từ chối chơi Connect4. \:(',
                timeEndMessage: 'Người chơi không trả lời! Sập game',
              }).startGame()
        }
    }
}