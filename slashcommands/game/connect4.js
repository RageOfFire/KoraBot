const { Connect4 } = require('discord-gamecord')

const run = async({ client, interaction, prefix }) => {
  let user = interaction.options.getMember("user");
  if(!user) {
    interaction.reply({content: "Không thể bắt đầu trò chơi khi không có đối thủ", ephemeral: true});
  }
  else {
      new Connect4({
          message: interaction,
          slash_command: true,
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
        }).startGame().catch((err) => {console.log(err)});
  }
}

module.exports = {
    name: "connect4",
    category: "game",
    description: 'Game connect4 yêu cầu phải có người chơi cùng',
    permissions: [],
    devOnly: false,
    options: [
      {
          name: "user",
          description: "Người nào đó",
          type: "USER",
          required: true
      },
  ], run
}