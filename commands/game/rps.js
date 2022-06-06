const { RockPaperScissors } = require('discord-gamecord')
module.exports = {
    name: "rps",
    category: "game",
    description: 'Game Búa bao kéo yêu cầu phải có người chơi cùng',
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        const user = message.mentions.users.first();
        if(!user) {
            message.reply('Không thể bắt đầu trò chơi khi không có đối thủ hãy ping 1 ai đó để rủ họ');
        }
        else {
            new RockPaperScissors({
                message: message,
                slash_command: false,
                opponent: user,
                embed: {
                  title: 'Búa bao kéo',
                  description: 'Ấn bất kỳ nút nào dưới đây để chọn!',
                  color: '#faa152',
                },
                buttons: {
                  rock: 'Rock',
                  paper: 'Paper',
                  scissors: 'Scissors',
                },
                emojis: {
                  rock: '🌑',
                  paper: '📃',
                  scissors: '✂️',
                },
                othersMessage: 'Bạn không có quyền sử dụng nút này!',
                chooseMessage: 'Bạn chọn {emoji}!',
                noChangeMessage: 'Bạn không thể thay đổi quyết định!',
                askMessage: 'Ê {opponent}, {challenger} đang gạ solo Búa bao kéo nè!',
                cancelMessage: 'Có vẻ người chơi từ chối chơi Búa bao kéo. \:(',
                timeEndMessage: 'Người chơi không trả lời! Sập game',
                drawMessage: 'Hòa!',
                winMessage: '{winner} đã chiến thắng!',
                gameEndMessage: 'Game kết thúc và có cát nịt :(',
              }).startGame().catch((err) => {console.log(err)});
        }
    }
}