const { TicTacToe } = require('discord-gamecord')

const run = async({ client, interaction, prefix }) => {
  let user = interaction.options.getMember("user");
  if(!user) {
    interaction.reply({content: "Không thể bắt đầu trò chơi khi không có đối thủ", ephemeral: true});
  }
  else {
    new TicTacToe({
      message: interaction,
      slash_command: true,
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
    }).startGame().catch((err) => {console.log(err)});
  }
}

module.exports = {
    name: "ttt",
    category: "game",
    description: 'Game Tic Tac Toe yêu cầu phải có người chơi cùng',
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