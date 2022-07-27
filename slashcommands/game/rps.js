const { RockPaperScissors } = require('discord-gamecord')

const run = async({ client, interaction, prefix }) => {
  let user = interaction.options.getMember("user");
  if(!user) {
    interaction.reply({content: "Không thể bắt đầu trò chơi khi không có đối thủ", ephemeral: true});
  }
  else {
      new RockPaperScissors({
          message: interaction,
          slash_command: true,
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

module.exports = {
    name: "rps",
    category: "game",
    description: 'Game Búa bao kéo yêu cầu phải có người chơi cùng',
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